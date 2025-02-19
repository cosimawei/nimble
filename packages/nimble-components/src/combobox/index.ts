import { attr, html, observable, ref } from '@microsoft/fast-element';
import {
    DesignSystem,
    Combobox as FoundationCombobox,
    ComboboxOptions
} from '@microsoft/fast-foundation';
import {
    keyArrowDown,
    keyArrowUp,
    keyEnter,
    keySpace
} from '@microsoft/fast-web-utilities';
import { ToggleButton, toggleButtonTag } from '../toggle-button';
import { errorTextTemplate } from '../patterns/error/template';
import { iconArrowExpanderDownTag } from '../icons/arrow-expander-down';
import { iconExclamationMarkTag } from '../icons/exclamation-mark';

import { styles } from './styles';
import type { ErrorPattern } from '../patterns/error/types';
import type { DropdownPattern } from '../patterns/dropdown/types';
import { DropdownAppearance } from '../patterns/dropdown/types';
import type { AnchoredRegion } from '../anchored-region';
import { template } from './template';

declare global {
    interface HTMLElementTagNameMap {
        'nimble-combobox': Combobox;
    }
}

/**
 * A nimble-styed HTML combobox
 */
export class Combobox
    extends FoundationCombobox
    implements DropdownPattern, ErrorPattern {
    @attr
    public appearance: DropdownAppearance = DropdownAppearance.underline;

    /**
     * The ref to the internal dropdown button element.
     *
     * @internal
     */
    @observable
    public readonly dropdownButton?: ToggleButton;

    /**
     * A message explaining why the value is invalid.
     *
     * @public
     * @remarks
     * HTML Attribute: error-text
     */
    @attr({ attribute: 'error-text' })
    public errorText?: string;

    @attr({ attribute: 'error-visible', mode: 'boolean' })
    public errorVisible = false;

    /**
     * @internal
     */
    @observable
    public region?: AnchoredRegion;

    /**
     * @internal
     */
    @observable
    public controlWrapper?: HTMLElement;

    /** @internal */
    @observable
    public hasOverflow = false;

    public override get value(): string {
        return super.value;
    }

    // This override is to work around an issue in FAST where an old filter value
    // is used after programmatically setting the value property.
    // See: https://github.com/microsoft/fast/issues/6749
    public override set value(next: string) {
        super.value = next;
        // Workaround using index notation to manipulate private member
        // Can remove when following resolved: https://github.com/microsoft/fast/issues/6749
        // eslint-disable-next-line @typescript-eslint/dot-notation
        this['filter'] = next;
        this.filterOptions();
        this.selectedIndex = this.options
            .map(option => option.text)
            .indexOf(this.value);
    }

    private valueUpdatedByInput = false;
    private valueBeforeTextUpdate?: string;

    // Workaround for https://github.com/microsoft/fast/issues/5123
    public override setPositioning(): void {
        if (!this.$fastController.isConnected) {
            // Don't call setPositioning() until we're connected,
            // since this.forcedPosition isn't initialized yet.
            return;
        }
        super.setPositioning();
    }

    // Workaround for https://github.com/microsoft/fast/issues/5773
    public override slottedOptionsChanged(
        prev: HTMLElement[],
        next: HTMLElement[]
    ): void {
        const value = this.value;
        super.slottedOptionsChanged(prev, next);
        if (value) {
            this.value = value;
        }
    }

    public override connectedCallback(): void {
        super.connectedCallback();
        // Call setPositioning() after this.forcedPosition is initialized.
        this.setPositioning();
        this.updateInputAriaLabel();
    }

    public toggleButtonClickHandler(e: Event): void {
        e.stopImmediatePropagation();
    }

    public toggleButtonChangeHandler(e: Event): void {
        this.open = this.dropdownButton!.checked;
        e.stopImmediatePropagation();
    }

    public toggleButtonKeyDownHandler(e: KeyboardEvent): boolean {
        switch (e.key) {
            case keyArrowUp:
            case keyArrowDown:
            case keySpace:
            case keyEnter:
                this.open = true;
                this.stopPropagation(e);
                return false;
            default:
                return true;
        }
    }

    public override filterOptions(): void {
        super.filterOptions();
        const enabledOptions = this.filteredOptions.filter(o => !o.disabled);
        this.filteredOptions = enabledOptions;
    }

    /**
     * This is a workaround for the issue described here: https://github.com/microsoft/fast/issues/6267
     * For now, we will update the value ourselves while a user types in text. Note that there is other
     * implementation related to this (like the 'keydownEventHandler') needed to create the complete set
     * of desired behavior described in the issue noted above.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    public override inputHandler(e: InputEvent): boolean | void {
        const returnValue = super.inputHandler(e);
        if (!this.valueUpdatedByInput) {
            this.valueBeforeTextUpdate = this.value;
        }
        this.valueUpdatedByInput = true;
        // This is a workaround for this FAST issue: https://github.com/microsoft/fast/issues/6776
        if (this.value !== this.control.value) {
            this.focusAndScrollOptionIntoView();
        }

        this.value = this.control.value;
        return returnValue;
    }

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    public override keydownHandler(e: KeyboardEvent): boolean | void {
        const returnValue = super.keydownHandler(e);
        if (e.ctrlKey || e.altKey) {
            return returnValue;
        }

        switch (e.key) {
            case keyEnter:
                this.emitChangeIfValueUpdated();
                break;
            case keyArrowDown:
            case keyArrowUp:
                if (this.open && this.valueUpdatedByInput) {
                    this.valueUpdatedByInput = false;
                }
                break;
            default:
                return returnValue;
        }
        return returnValue;
    }

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    public override focusoutHandler(e: FocusEvent): boolean | void {
        const returnValue = super.focusoutHandler(e);
        this.open = false;
        this.emitChangeIfValueUpdated();
        return returnValue;
    }

    protected override openChanged(): void {
        super.openChanged();
        if (this.dropdownButton) {
            this.dropdownButton.checked = this.open;
        }
    }

    private regionChanged(
        _prev: AnchoredRegion | undefined,
        _next: AnchoredRegion | undefined
    ): void {
        if (this.region && this.controlWrapper) {
            this.region.anchorElement = this.controlWrapper;
        }
    }

    private controlWrapperChanged(
        _prev: HTMLElement | undefined,
        _next: HTMLElement | undefined
    ): void {
        if (this.region && this.controlWrapper) {
            this.region.anchorElement = this.controlWrapper;
        }
    }

    // Workaround for https://github.com/microsoft/fast/issues/6041.
    private ariaLabelChanged(_oldValue: string, _newValue: string): void {
        this.updateInputAriaLabel();
    }

    private maxHeightChanged(): void {
        this.updateListboxMaxHeightCssVariable();
    }

    private updateListboxMaxHeightCssVariable(): void {
        if (this.listbox) {
            this.listbox.style.setProperty(
                '--ni-private-select-max-height',
                `${this.maxHeight}px`
            );
        }
    }

    private updateInputAriaLabel(): void {
        const inputElement = this.shadowRoot?.querySelector('.selected-value');
        if (this.ariaLabel) {
            inputElement?.setAttribute('aria-label', this.ariaLabel);
        } else {
            inputElement?.removeAttribute('aria-label');
        }
    }

    /**
     * This will only emit a `change` event after text entry where the text in the input prior to
     * typing is different than the text present upon an attempt to commit (e.g. pressing <Enter>).
     * So, for a concrete example:
     * 1) User types 'Sue' (when Combobox input was blank).
     * 2) User presses <Enter> -> 'change' event fires
     * 3) User deletes 'Sue'
     * 4) User re-types 'Sue'
     * 5) User presses <Enter> -> NO 'change' event is fired
     */
    private emitChangeIfValueUpdated(): void {
        if (this.valueUpdatedByInput) {
            if (this.value !== this.valueBeforeTextUpdate) {
                this.$emit('change');
            }

            this.valueUpdatedByInput = false;
        }
    }
}

const nimbleCombobox = Combobox.compose<ComboboxOptions>({
    baseName: 'combobox',
    baseClass: FoundationCombobox,
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true
    },
    end: html<Combobox>`
        <div class="end-slot-container">
            <${iconExclamationMarkTag}
                severity="error"
                class="error-icon"
            ></${iconExclamationMarkTag}>
            <div class="separator"></div>
            <${toggleButtonTag}
                ${ref('dropdownButton')}
                appearance="ghost"
                ?checked="${x => x.open}"
                ?disabled="${x => x.disabled}"
                content-hidden="true"
                @click="${(x, c) => x.toggleButtonClickHandler(c.event)}"
                @change="${(x, c) => x.toggleButtonChangeHandler(c.event)}"
                @keydown="${(x, c) => x.toggleButtonKeyDownHandler(c.event as KeyboardEvent)}"
                class="dropdown-button"
                part="button"
                aria-haspopup="true"
                aria-expanded="${x => x.open}"
                tabindex="-1"
            >
                <${iconArrowExpanderDownTag}
                    slot="start"
                    class="dropdown-icon"
                >
                </${iconArrowExpanderDownTag}>
            </${toggleButtonTag}>
        </div>
        ${errorTextTemplate}
    `
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleCombobox());
export const comboboxTag = 'nimble-combobox';
