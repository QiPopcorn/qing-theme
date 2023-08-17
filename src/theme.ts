import { toArray } from '@antfu/utils';
import { getColors } from './primer';
import { VitesseThemes } from './colors';

export default function getTheme({ style, name, soft = false, black = false }) {
    // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
    const pick = (options, op = '') => options[style] + op;

    const vitesse = (key: keyof typeof VitesseThemes, op = '') =>
        pick({ light: VitesseThemes[key][1] + op, dark: VitesseThemes[key][0] + op });

    const primer = getColors(style);

    const foreground = vitesse('foreground');
    const secondaryForeground = vitesse('secondaryForeground');
    const activeForeground = vitesse('activeForeground');
    const primary = vitesse('primary');

    const border = vitesse('border');
    const background = vitesse('background');
    const lowBackground = vitesse('lowBackground');
    const secondaryBackground = vitesse('secondaryBackground');
    const activeBackground = black ? '#121212' : soft ? vitesse('lowActiveBackground') : vitesse('activeBackground');

    const punctuation = black ? vitesse('punctuation', 'cc') : vitesse('punctuation');

    const selectionBackgroundInActive = pick({ dark: '#eeeeee08' });
    const selectionBackgroundActive = pick({ dark: '#eeeeee15' });
    const selectionBackground = pick({ dark: '#eeeeee10' });

    const theme = {
        name,
        base: pick({ light: 'vs', dark: 'vs-dark' }),
        colors: {
            'activityBar.activeBorder': background,
            'activityBar.background': background,
            'activityBar.border': border,
            'activityBar.foreground': vitesse('primary'),
            'activityBar.inactiveForeground': vitesse('primary', '80'),
            'activityBarBadge.background': vitesse('primary'),
            'activityBarBadge.foreground': secondaryBackground,
            'badge.background': vitesse('secondaryForeground'),
            'badge.foreground': secondaryBackground,
            'breadcrumb.activeSelectionForeground': selectionBackgroundActive,
            'breadcrumb.focusForeground': foreground,
            'breadcrumb.foreground': pick({ dark: primer.gray[4] }),
            'breadcrumbPicker.background': lowBackground,
            'button.background': vitesse('green'),
            'button.foreground': secondaryBackground,
            'button.hoverBackground': vitesse('green'),
            'checkbox.background': lowBackground,
            'checkbox.border': vitesse('primary'),
            'debugToolBar.background': lowBackground,
            descriptionForeground: vitesse('secondaryForeground'),
            'diffEditor.insertedTextBackground': vitesse('green', '22'),
            'diffEditor.removedTextBackground': pick({ dark: '#ab595922' }),
            'editor.background': background,
            'editor.findMatchBackground': vitesse('yellow', '22'),
            'editor.findMatchHighlightBackground': vitesse('yellow', '44'),
            'editor.focusedStackFrameHighlightBackground': pick({ dark: '#bb880088' }),
            'editor.foldBackground': selectionBackground,
            'editor.foreground': foreground,
            'editor.inactiveSelectionBackground': selectionBackgroundInActive,
            'editor.lineHighlightBackground': background,
            'editor.selectionBackground': selectionBackgroundActive,
            'editor.selectionHighlightBackground': selectionBackgroundInActive,
            'editor.stackFrameHighlightBackground': pick({ dark: '#aa770077' }),
            'editor.wordHighlightBackground': pick({ dark: '#1c6b4805' }),
            'editor.wordHighlightStrongBackground': pick({ dark: '#1c6b4810' }),
            'editorBracketHighlight.foreground1': vitesse('cyan'),
            'editorBracketHighlight.foreground2': vitesse('green'),
            'editorBracketHighlight.foreground3': vitesse('orange'),
            'editorBracketHighlight.foreground4': vitesse('magenta'),
            'editorBracketHighlight.foreground5': vitesse('yellow'),
            'editorBracketHighlight.foreground6': vitesse('blue'),
            'editorBracketMatch.background': vitesse('green', '20'),
            'editorCursor.background': pick({ dark: '#dcdcdc' }),
            'editorCursor.foreground': pick({ dark: '#808080' }),
            'editorError.foreground': vitesse('errorForeground'),
            'editorGroup.border': border,
            'editorGroupHeader.tabsBackground': secondaryBackground,
            'editorGroupHeader.tabsBorder': border,
            'editorGutter.addedBackground': vitesse('green'),
            'editorGutter.commentRangeForeground': vitesse('secondaryIgnored'),
            'editorGutter.deletedBackground': vitesse('errorForeground'),
            'editorGutter.foldingControlForeground': vitesse('secondaryForeground'),
            'editorGutter.modifiedBackground': vitesse('blue'),
            'editorHint.foreground': vitesse('green'),
            'editorIndentGuide.activeBackground': pick({ dark: primer.white }, '30'),
            'editorIndentGuide.background': pick({ dark: primer.white }, '15'),
            'editorInfo.foreground': vitesse('blue'),
            'editorInlayHint.background': '#00000000',
            'editorInlayHint.foreground': '#777777',
            'editorLineNumber.activeForeground': vitesse('primary'),
            'editorLineNumber.foreground': vitesse('primary', '80'),
            'editorOverviewRuler.border': '#111111',
            'editorSuggestWidget.highlightForeground': '#b5bd68',
            'editorWarning.foreground': vitesse('orange'),
            'editorWhitespace.foreground': '#165656a0',
            'editorWidget.background': lowBackground,
            errorForeground: vitesse('errorForeground'),
            focusBorder: '#00000000',
            foreground: foreground,
            'gitDecoration.addedResourceForeground': vitesse('green'),
            'gitDecoration.conflictingResourceForeground': vitesse('orange'),
            'gitDecoration.deletedResourceForeground': vitesse('errorForeground'),
            'gitDecoration.modifiedResourceForeground': vitesse('blue'),
            'gitDecoration.submoduleResourceForeground': vitesse('secondaryForeground'),
            'gitDecoration.untrackedResourceForeground': vitesse('cyan'),
            'input.background': lowBackground,
            'input.border': border,
            'input.foreground': foreground,
            'input.placeholderForeground': vitesse('secondaryForeground'),
            'inputOption.activeBackground': vitesse('secondaryIgnored'),
            'list.activeSelectionBackground': '#373737',
            'list.activeSelectionForeground': foreground,
            'list.focusBackground': lowBackground,
            'list.hoverBackground': '#373737',
            'list.hoverForeground': foreground,
            'list.inactiveFocusBackground': secondaryBackground,
            'list.inactiveSelectionBackground': '#373737',
            'list.inactiveSelectionForeground': foreground,
            'menu.background': '#454545',
            'notificationCenterHeader.background': lowBackground,
            'notificationCenterHeader.foreground': pick({ dark: primer.gray[4] }),
            'notifications.background': lowBackground,
            'notifications.border': border,
            'notifications.foreground': foreground,
            'notificationsErrorIcon.foreground': vitesse('errorForeground'),
            'notificationsInfoIcon.foreground': vitesse('blue'),
            'notificationsWarningIcon.foreground': vitesse('orange'),
            'panel.background': lowBackground,
            'panel.border': border,
            'panelInput.border': '#2f363d',
            'panelTitle.activeBorder': vitesse('green'),
            'panelTitle.activeForeground': foreground,
            'panelTitle.inactiveForeground': pick({ dark: primer.gray[4] }),
            'peekViewEditor.background': lowBackground,
            'peekViewEditor.matchHighlightBackground': '#ffd33d33',
            'peekViewResult.background': lowBackground,
            'peekViewResult.matchHighlightBackground': '#ffd33d33',
            'pickerGroup.border': '#444d56',
            'pickerGroup.foreground': foreground,
            'problemsErrorIcon.foreground': vitesse('errorForeground'),
            'problemsInfoIcon.foreground': vitesse('blue'),
            'problemsWarningIcon.foreground': vitesse('orange'),
            'progressBar.background': vitesse('green'),
            'quickInput.background': lowBackground,
            'quickInput.foreground': foreground,
            'scrollbar.shadow': pick({ dark: '#00000088' }),
            'scrollbarSlider.activeBackground': vitesse('ignored'),
            'scrollbarSlider.background': vitesse('secondaryIgnored'),
            'scrollbarSlider.hoverBackground': vitesse('ignored'),
            'settings.headerForeground': foreground,
            'settings.modifiedItemIndicator': vitesse('green'),
            'sideBar.background': background,
            'sideBar.border': border,
            'sideBar.foreground': '#bfbaaa',
            'sideBarSectionHeader.background': lowBackground,
            'sideBarSectionHeader.border': border,
            'sideBarSectionHeader.foreground': foreground,
            'sideBarTitle.foreground': foreground,
            'statusBar.background': background,
            'statusBar.border': border,
            'statusBar.debuggingBackground': lowBackground,
            'statusBar.debuggingForeground': '#bfbaaa',
            'statusBar.foreground': '#bfbaaa',
            'statusBar.noFolderBackground': secondaryBackground,
            'statusBarItem.prominentBackground': lowBackground,
            'statusBarItem.remoteBackground': '#5e8d87',
            'tab.activeBackground': secondaryBackground,
            'tab.activeBorder': vitesse('primary'),
            'tab.activeForeground': foreground,
            'tab.border': border,
            'tab.hoverBackground': lowBackground,
            'tab.inactiveBackground': secondaryBackground,
            'tab.inactiveForeground': pick({ dark: primer.gray[4] }),
            'tab.unfocusedActiveBorder': border,
            'tab.unfocusedActiveBorderTop': border,
            'tab.unfocusedHoverBackground': secondaryBackground,
            'terminal.ansiBlack': '#282a2e',
            'terminal.ansiBlue': '#5f819d',
            'terminal.ansiBrightBlack': '#707880',
            'terminal.ansiBrightBlue': '#81a2be',
            'terminal.ansiBrightCyan': '#8abeb7',
            'terminal.ansiBrightGreen': '#b5bd68',
            'terminal.ansiBrightRed': '#cc6666',
            'terminal.ansiBrightWhite': '#c5c8c6',
            'terminal.ansiBrightYellow': '#f0c674',
            'terminal.ansiCyan': '#5e8d87',
            'terminal.ansiRed': '#a54242',
            'terminal.ansiWhite': '#707880',
            'terminal.ansiYellow': '#de935f',
            'terminal.background': background,
            'terminal.foreground': '#c5c8c6',
            'textBlockQuote.background': lowBackground,
            'textBlockQuote.border': border,
            'textCodeBlock.background': lowBackground,
            'textLink.activeForeground': vitesse('green'),
            'textLink.foreground': vitesse('green'),
            'textPreformat.foreground': '#d1d5da',
            'textSeparator.foreground': '#586069',
            'titleBar.activeBackground': secondaryBackground,
            'titleBar.activeForeground': '#bfbaaa',
            'titleBar.border': lowBackground,
            'titleBar.inactiveBackground': secondaryBackground,
            'titleBar.inactiveForeground': pick({ dark: primer.gray[4] }),
            'tree.indentGuidesStroke': '#2f363d',
        },
        semanticHighlighting: true,
        semanticTokenColors: {
            namespace: vitesse('namespace'),
            property: vitesse('property'),
            interface: vitesse('interface'),
            type: vitesse('interface'),
            class: vitesse('class'),
        },
        tokenColors: [
            {
                scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
                settings: {
                    foreground: '#758575DD',
                },
            },
            {
                scope: [
                    'delimiter.bracket',
                    'delimiter',
                    'invalid.illegal.character-not-allowed-here.html',
                    'keyword.operator.rest',
                    'keyword.operator.spread',
                    'keyword.operator.type.annotation',
                    'keyword.operator.relational.ts',
                    'meta.brace',
                    'meta.tag.block.any.html',
                    'meta.tag.inline.any.html',
                    'meta.tag.structure.input.void.html',
                    'meta.type.annotation',
                    'storage.type.function.arrow',
                    'keyword.operator.type',
                    'meta.objectliteral.ts',
                    'punctuation',
                ],
                settings: {
                    foreground: '#777777',
                },
            },
            {
                scope: ['constant', 'entity.name.constant', 'variable.language', 'meta.definition.variable'],
                settings: {
                    foreground: '#C99076',
                },
            },
            {
                scope: ['entity', 'entity.name'],
                settings: {
                    foreground: '#80A665',
                },
            },
            {
                scope: 'variable.parameter.function',
                settings: {
                    foreground: foreground,
                },
            },
            {
                scope: ['entity.name.tag', 'tag.html'],
                settings: {
                    foreground: vitesse('green'),
                },
            },
            {
                scope: 'entity.name.function',
                settings: {
                    foreground: '#80A665',
                },
            },
            {
                scope: ['keyword', 'storage.type.class.jsdoc'],
                settings: {
                    foreground: vitesse('green'),
                },
            },
            {
                scope: ['storage', 'storage.type', 'support.type.builtin', 'constant.language.undefined', 'constant.language.null'],
                settings: {
                    foreground: vitesse('errorForeground'),
                },
            },
            {
                scope: ['storage.modifier.package', 'storage.modifier.import', 'storage.type.java'],
                settings: {
                    foreground: foreground,
                },
            },
            {
                scope: ['string', 'string punctuation.section.embedded source', 'attribute.value'],
                settings: {
                    foreground: '#C98A7D',
                },
            },
            {
                scope: ['punctuation.definition.string', 'punctuation.support.type.property-name'],
                settings: {
                    foreground: '#C98A7DAA',
                },
            },
            {
                scope: 'support',
                settings: {
                    foreground: '#B8A965',
                },
            },
            {
                scope: ['property', 'meta.property-name', 'meta.object-literal.key', 'entity.name.tag.yaml', 'attribute.name'],
                settings: {
                    foreground: '#B8A965',
                },
            },
            {
                scope: ['entity.other.attribute-name', 'invalid.deprecated.entity.other.attribute-name.html'],
                settings: {
                    foreground: '#BD976A',
                },
            },
            {
                scope: ['variable', 'identifier'],
                settings: {
                    foreground: '#BD976A',
                },
            },
            {
                scope: ['support.type.primitive', 'entity.name.type'],
                settings: {
                    foreground: '#5DA9A7',
                },
            },
            {
                scope: 'namespace',
                settings: {
                    foreground: '#DB889A',
                },
            },
            {
                scope: ['keyword.operator', 'meta.var.expr.ts'],
                settings: {
                    foreground: vitesse('errorForeground'),
                },
            },
            {
                scope: 'invalid.broken',
                settings: {
                    foreground: '#FDAEB7',
                    fontStyle: 'italic',
                },
            },
            {
                scope: 'invalid.deprecated',
                settings: {
                    foreground: '#FDAEB7',
                    fontStyle: 'italic',
                },
            },
            {
                scope: 'invalid.illegal',
                settings: {
                    foreground: '#FDAEB7',
                    fontStyle: 'italic',
                },
            },
            {
                scope: 'invalid.unimplemented',
                settings: {
                    foreground: '#FDAEB7',
                    fontStyle: 'italic',
                },
            },
            {
                scope: 'carriage-return',
                settings: {
                    foreground: '#24292E',
                    background: '#F97583',
                    fontStyle: 'italic underline',
                },
            },
            {
                scope: 'message.error',
                settings: {
                    foreground: '#FDAEB7',
                },
            },
            {
                scope: 'string source',
                settings: {
                    foreground: foreground,
                },
            },
            {
                scope: 'string variable',
                settings: {
                    foreground: '#C98A7D',
                },
            },
            {
                scope: ['source.regexp', 'string.regexp'],
                settings: {
                    foreground: '#C4704F',
                },
            },
            {
                scope: [
                    'string.regexp.character-class',
                    'string.regexp constant.character.escape',
                    'string.regexp source.ruby.embedded',
                    'string.regexp string.regexp.arbitrary-repitition',
                ],
                settings: {
                    foreground: '#C98A7D',
                },
            },
            {
                scope: 'string.regexp constant.character.escape',
                settings: {
                    foreground: vitesse('yellow'),
                },
            },
            {
                scope: ['support.constant'],
                settings: {
                    foreground: '#C99076',
                },
            },
            {
                scope: ['constant.numeric', 'number'],
                settings: {
                    foreground: '#4C9A91',
                },
            },
            {
                scope: ['keyword.other.unit'],
                settings: {
                    foreground: vitesse('errorForeground'),
                },
            },
            {
                scope: ['constant.language.boolean', 'constant.language'],
                settings: {
                    foreground: vitesse('green'),
                },
            },
            {
                scope: 'meta.module-reference',
                settings: {
                    foreground: vitesse('green'),
                },
            },
            {
                scope: 'punctuation.definition.list.begin.markdown',
                settings: {
                    foreground: vitesse('orange'),
                },
            },
            {
                scope: ['markup.heading', 'markup.heading entity.name'],
                settings: {
                    foreground: vitesse('green'),
                    fontStyle: 'bold',
                },
            },
            {
                scope: 'markup.quote',
                settings: {
                    foreground: '#5DA994',
                },
            },
            {
                scope: 'markup.italic',
                settings: {
                    foreground: foreground,
                    fontStyle: 'italic',
                },
            },
            {
                scope: 'markup.bold',
                settings: {
                    foreground: foreground,
                    fontStyle: 'bold',
                },
            },
            {
                scope: 'markup.raw',
                settings: {
                    foreground: vitesse('green'),
                },
            },
            {
                scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
                settings: {
                    foreground: '#FDAEB7',
                    background: '#86181D',
                },
            },
            {
                scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
                settings: {
                    foreground: '#85E89D',
                    background: '#144620',
                },
            },
            {
                scope: ['markup.changed', 'punctuation.definition.changed'],
                settings: {
                    foreground: '#FFAB70',
                    background: '#C24E00',
                },
            },
            {
                scope: ['markup.ignored', 'markup.untracked'],
                settings: {
                    foreground: '#2F363D',
                    background: '#79B8FF',
                },
            },
            {
                scope: 'meta.diff.range',
                settings: {
                    foreground: '#B392F0',
                    fontStyle: 'bold',
                },
            },
            {
                scope: 'meta.diff.header',
                settings: {
                    foreground: '#79B8FF',
                },
            },
            {
                scope: 'meta.separator',
                settings: {
                    foreground: '#79B8FF',
                    fontStyle: 'bold',
                },
            },
            {
                scope: 'meta.output',
                settings: {
                    foreground: '#79B8FF',
                },
            },
            {
                scope: [
                    'brackethighlighter.tag',
                    'brackethighlighter.curly',
                    'brackethighlighter.round',
                    'brackethighlighter.square',
                    'brackethighlighter.angle',
                    'brackethighlighter.quote',
                ],
                settings: {
                    foreground: '#D1D5DA',
                },
            },
            {
                scope: 'brackethighlighter.unmatched',
                settings: {
                    foreground: '#FDAEB7',
                },
            },
            {
                scope: [
                    'constant.other.reference.link',
                    'string.other.link',
                    'punctuation.definition.string.begin.markdown',
                    'punctuation.definition.string.end.markdown',
                ],
                settings: {
                    foreground: '#C98A7D',
                },
            },
            {
                scope: ['markup.underline.link.markdown'],
                settings: {
                    foreground: vitesse('secondaryForeground'),
                    fontStyle: 'underline',
                },
            },
            {
                scope: ['type.identifier'],
                settings: {
                    foreground: '#6893BF',
                },
            },
            {
                scope: ['entity.other.attribute-name.html.vue'],
                settings: {
                    foreground: '#80A665',
                },
            },
            {
                scope: ['invalid.illegal.unrecognized-tag.html'],
                settings: {
                    fontStyle: 'normal',
                },
            },
            {
                scope: 'token.info-token',
                settings: {
                    foreground: '#6796E6',
                },
            },
            {
                scope: 'token.warn-token',
                settings: {
                    foreground: '#CD9731',
                },
            },
            {
                scope: 'token.error-token',
                settings: {
                    foreground: '#F44747',
                },
            },
            {
                scope: 'token.debug-token',
                settings: {
                    foreground: '#B267E6',
                },
            },
        ],
        rules: [],
    };

    // monaco rules
    const rules: any[] = [];

    theme.tokenColors.forEach(({ scope, settings }: any) => {
        for (const s of toArray(scope)) {
            rules.push({
                token: s,
                foreground: settings.foreground?.replace('#', ''),
            });
        }
    });

    theme.rules = rules;

    return theme;
}
