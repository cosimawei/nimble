import type { StoryFn, Meta } from '@storybook/html';
import { html, ViewTemplate } from '@microsoft/fast-element';
import { pascalCase } from '@microsoft/fast-web-utilities';
import { createStory } from '../../utilities/tests/storybook';
import {
    createMatrixThemeStory,
    createMatrix,
    sharedMatrixParameters
} from '../../utilities/tests/matrix';
import { TextAreaAppearance } from '../types';
import {
    disabledStates,
    DisabledState,
    ReadOnlyState,
    readOnlyStates,
    ErrorState,
    errorStates
} from '../../utilities/tests/states';
import { hiddenWrapper } from '../../utilities/tests/hidden';
import { textCustomizationWrapper } from '../../utilities/tests/text-customization';
import { loremIpsum } from '../../utilities/tests/lorem-ipsum';
import { textAreaTag } from '..';

const metadata: Meta = {
    title: 'Tests/Text Area',
    parameters: {
        ...sharedMatrixParameters()
    }
};

export default metadata;

const valueStates = [
    ['Placeholder', null, 'placeholder'],
    ['Value', 'Hello', null],
    ['Long Value', loremIpsum, null]
] as const;
type ValueState = (typeof valueStates)[number];

const appearanceStates = Object.entries(TextAreaAppearance).map(
    ([key, value]) => [pascalCase(key), value]
);
type AppearanceState = (typeof appearanceStates)[number];

const component = (
    [readOnlyName, readonly]: ReadOnlyState,
    [disabledName, disabled]: DisabledState,
    [appearanceName, appearance]: AppearanceState,
    [valueName, valueValue, placeholderValue]: ValueState,
    [errorStateName, isError, errorText]: ErrorState
): ViewTemplate => html`
    <${textAreaTag}
        style="width: 250px; margin: 15px;"
        ?disabled="${() => disabled}"
        appearance="${() => appearance}"
        value="${() => valueValue}"
        placeholder="${() => placeholderValue}"
        ?readonly="${() => readonly}"
        error-visible="${() => isError}"
        error-text="${() => errorText}"
    >
        ${() => disabledName} ${() => appearanceName} ${() => valueName}
        ${() => readOnlyName} ${() => errorStateName}
    </${textAreaTag}>
`;

export const textAreaThemeMatrix: StoryFn = createMatrixThemeStory(
    createMatrix(component, [
        readOnlyStates,
        disabledStates,
        appearanceStates,
        valueStates,
        errorStates
    ])
);

const widthSizingTestCase = (
    [widthLabel, widthStyle]: [string, string],
    [colsLabel, cols]: [string, number | undefined]
): ViewTemplate => html`
    <div style="width: 500px; height: 100px; outline: 1px dotted black">
        <${textAreaTag}
            cols="${() => cols}"
            style="${widthStyle}"
            value="${loremIpsum}"
        >
            ${widthLabel} ${colsLabel}
        </${textAreaTag}>
    </div>
`;

const heightSizingTestCase = (
    [heightLabel, heightStyle]: [string, string],
    [rowsLabel, rows]: [string, number | undefined]
): ViewTemplate => html`
    <div style="width: 500px; height: 100px; outline: 1px dotted black">
        <${textAreaTag}
            rows="${() => rows}"
            style="${heightStyle}"
            value="${loremIpsum}"
        >
            ${heightLabel} ${rowsLabel}
        </${textAreaTag}>
    </div>
`;

export const textAreaSizing: StoryFn = createStory(html`
    ${createMatrix(widthSizingTestCase, [
        [
            ['No width', ''],
            ['Width=300px', 'width: 300px'],
            ['Width=100%', 'width: 100%']
        ],
        [
            ['no cols', undefined],
            ['cols=10', 10]
        ]
    ])}
    ${createMatrix(heightSizingTestCase, [
        [
            ['No height', ''],
            ['Height=50px', 'height: 50px'],
            ['Height=100%', 'height: 100%']
        ],
        [
            ['no rows', undefined],
            ['rows=3', 3]
        ]
    ])}
`);

export const hiddenTextArea: StoryFn = createStory(
    hiddenWrapper(
        html`<${textAreaTag} hidden>Hidden text area</${textAreaTag}>`
    )
);

export const textCustomized: StoryFn = createMatrixThemeStory(
    textCustomizationWrapper(
        html` <${textAreaTag} value="${loremIpsum}">
            Text area
        </${textAreaTag}>`
    )
);

export const heightTest: StoryFn = createStory(
    html`
        <div style="display: flex; flex-direction: column">
            <${textAreaTag} style="border: 1px dashed; width: 200px">
                With Label
            </${textAreaTag}>
            <${textAreaTag} style="border: 1px dashed; width: 200px">
            </${textAreaTag}>
        </div>
    `
);
