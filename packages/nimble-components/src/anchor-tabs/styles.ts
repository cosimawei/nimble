import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';

export const styles = css`
    ${display('grid')}

    :host {
        box-sizing: border-box;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
    }

    [part='start'] {
        display: none;
    }

    .tablist {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto;
        width: max-content;
        align-self: end;
    }
`;
