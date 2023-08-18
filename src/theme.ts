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
    const activeBackground = vitesse('activeBackground');

    const punctuation = black ? vitesse('punctuation', 'cc') : vitesse('punctuation');

    const selectionBackgroundInActive = pick({ dark: '#eeeeee08' });
    const selectionBackgroundActive = pick({ dark: '#eeeeee15' });
    const selectionBackground = pick({ dark: '#eeeeee10' });
    const listSelectionBackground = pick({ dark: '#373737' });

    const theme = {
        name,
        base: pick({ light: 'vs', dark: 'vs-dark' }),
        colors: {
            'activityBar.activeBorder': background,
            'activityBar.background': background,
            'activityBar.border': border,
            'activityBar.foreground': primary,
            'activityBar.inactiveForeground': vitesse('primary', '80'),
            'activityBarBadge.background': primary,
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
            'checkbox.border': primary,
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
            'editorInlayHint.background': pick({ dark: primer.black }, '00'),
            'editorInlayHint.foreground': vitesse('annotation'),
            'editorLineNumber.activeForeground': primary,
            'editorLineNumber.foreground': vitesse('primary', '80'),
            'editorOverviewRuler.border': pick({ dark: primer.black }),
            'editorSuggestWidget.highlightForeground': vitesse('ansiBrightGreen'),
            'editorWarning.foreground': vitesse('orange'),
            'editorWhitespace.foreground': pick({ dark: '#165656' }, 'a0'),
            'editorWidget.background': lowBackground,
            errorForeground: vitesse('errorForeground'),
            focusBorder: pick({ dark: primer.black }, '00'),
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
            'list.activeSelectionBackground': listSelectionBackground,
            'list.activeSelectionForeground': foreground,
            'list.focusBackground': lowBackground,
            'list.hoverBackground': listSelectionBackground,
            'list.hoverForeground': foreground,
            'list.inactiveFocusBackground': secondaryBackground,
            'list.inactiveSelectionBackground': listSelectionBackground,
            'list.inactiveSelectionForeground': foreground,
            'menu.background': pick({ dark: '#454545' }),
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
            'panelInput.border': pick({ dark: primer.gray[8] }),
            'panelTitle.activeBorder': vitesse('green'),
            'panelTitle.activeForeground': foreground,
            'panelTitle.inactiveForeground': pick({ dark: primer.gray[4] }),
            'peekViewEditor.background': lowBackground,
            'peekViewEditor.matchHighlightBackground': pick({ dark: primer.yellow[5] }, '33'),
            'peekViewResult.background': lowBackground,
            'peekViewResult.matchHighlightBackground': pick({ dark: primer.yellow[5] }, '33'),
            'pickerGroup.border': pick({ dark: primer.gray[7] }),
            'pickerGroup.foreground': foreground,
            'problemsErrorIcon.foreground': vitesse('errorForeground'),
            'problemsInfoIcon.foreground': vitesse('blue'),
            'problemsWarningIcon.foreground': vitesse('orange'),
            'progressBar.background': vitesse('green'),
            'quickInput.background': lowBackground,
            'quickInput.foreground': foreground,
            'scrollbar.shadow': pick({ dark: primer.black }, '88'),
            'scrollbarSlider.activeBackground': vitesse('ignored'),
            'scrollbarSlider.background': vitesse('secondaryIgnored'),
            'scrollbarSlider.hoverBackground': vitesse('ignored'),
            'settings.headerForeground': foreground,
            'settings.modifiedItemIndicator': vitesse('green'),
            'sideBar.background': background,
            'sideBar.border': border,
            'sideBar.foreground': vitesse('activeForeground'),
            'sideBarSectionHeader.background': lowBackground,
            'sideBarSectionHeader.border': border,
            'sideBarSectionHeader.foreground': foreground,
            'sideBarTitle.foreground': foreground,
            'statusBar.background': background,
            'statusBar.border': border,
            'statusBar.debuggingBackground': lowBackground,
            'statusBar.debuggingForeground': vitesse('activeForeground'),
            'statusBar.foreground': vitesse('activeForeground'),
            'statusBar.noFolderBackground': secondaryBackground,
            'statusBarItem.prominentBackground': lowBackground,
            'statusBarItem.remoteBackground': vitesse('ansiCyan'),
            'tab.activeBackground': secondaryBackground,
            'tab.activeBorder': primary,
            'tab.activeForeground': foreground,
            'tab.border': border,
            'tab.hoverBackground': lowBackground,
            'tab.inactiveBackground': secondaryBackground,
            'tab.inactiveForeground': pick({ dark: primer.gray[4] }),
            'tab.unfocusedActiveBorder': border,
            'tab.unfocusedActiveBorderTop': border,
            'tab.unfocusedHoverBackground': secondaryBackground,
            'terminal.ansiBlack': vitesse('ansiBlack'),
            'terminal.ansiBlue': vitesse('ansiBlue'),
            'terminal.ansiBrightBlack': vitesse('ansiBrightBlack'),
            'terminal.ansiBrightBlue': vitesse('ansiBrightBlue'),
            'terminal.ansiBrightCyan': vitesse('ansiBrightCyan'),
            'terminal.ansiBrightGreen': vitesse('ansiBrightGreen'),
            'terminal.ansiBrightRed': vitesse('ansiBrightRed'),
            'terminal.ansiBrightWhite': vitesse('ansiBrightWhite'),
            'terminal.ansiBrightYellow': vitesse('ansiBrightYellow'),
            'terminal.ansiCyan': vitesse('ansiCyan'),
            'terminal.ansiRed': vitesse('ansiRed'),
            'terminal.ansiWhite': vitesse('ansiWhite'),
            'terminal.ansiYellow': vitesse('ansiYellow'),
            'terminal.background': background,
            'terminal.foreground': vitesse('ansiBrightWhite'),
            'textBlockQuote.background': lowBackground,
            'textBlockQuote.border': border,
            'textCodeBlock.background': lowBackground,
            'textLink.activeForeground': vitesse('green'),
            'textLink.foreground': vitesse('green'),
            'textPreformat.foreground': pick({ dark: '#d1d5da' }),
            'textSeparator.foreground': pick({ dark: '#586069' }),
            'titleBar.activeBackground': secondaryBackground,
            'titleBar.activeForeground': vitesse('activeForeground'),
            'titleBar.border': lowBackground,
            'titleBar.inactiveBackground': secondaryBackground,
            'titleBar.inactiveForeground': pick({ dark: primer.gray[4] }),
            'tree.indentGuidesStroke': pick({ dark: primer.gray[8] }),
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
                    foreground: vitesse('comment'),
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
                    foreground: vitesse('annotation'),
                },
            },
            {
                scope: ['constant', 'entity.name.constant', 'variable.language', 'meta.definition.variable'],
                settings: {
                    foreground: vitesse('constant'),
                },
            },
            {
                scope: ['entity', 'entity.name'],
                settings: {
                    foreground: vitesse('function'),
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
                    foreground: vitesse('function'),
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
                    foreground: vitesse('string'),
                },
            },
            {
                scope: ['punctuation.definition.string', 'punctuation.support.type.property-name'],
                settings: {
                    foreground: vitesse('string', 'AA'),
                },
            },
            {
                scope: 'support',
                settings: {
                    foreground: vitesse('property'),
                },
            },
            {
                scope: ['property', 'meta.property-name', 'meta.object-literal.key', 'entity.name.tag.yaml', 'attribute.name'],
                settings: {
                    foreground: vitesse('property'),
                },
            },
            {
                scope: ['entity.other.attribute-name', 'invalid.deprecated.entity.other.attribute-name.html'],
                settings: {
                    foreground: vitesse('variable'),
                },
            },
            {
                scope: ['variable', 'identifier'],
                settings: {
                    foreground: vitesse('variable'),
                },
            },
            {
                scope: ['support.type.primitive', 'entity.name.type'],
                settings: {
                    foreground: vitesse('type'),
                },
            },
            {
                scope: 'namespace',
                settings: {
                    foreground: vitesse('namespace'),
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
                    foreground: pick({ dark: primer.red[2] }),
                    fontStyle: 'italic',
                },
            },
            {
                scope: 'invalid.deprecated',
                settings: {
                    foreground: pick({ dark: primer.red[2] }),
                    fontStyle: 'italic',
                },
            },
            {
                scope: 'invalid.illegal',
                settings: {
                    foreground: pick({ dark: primer.red[2] }),
                    fontStyle: 'italic',
                },
            },
            {
                scope: 'invalid.unimplemented',
                settings: {
                    foreground: pick({ dark: primer.red[2] }),
                    fontStyle: 'italic',
                },
            },
            {
                scope: 'carriage-return',
                settings: {
                    foreground: pick({ dark: primer.gray[9] }),
                    background: pick({ dark: primer.red[3] }),
                    fontStyle: 'italic underline',
                },
            },
            {
                scope: 'message.error',
                settings: {
                    foreground: pick({ dark: primer.red[2] }),
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
                    foreground: vitesse('string'),
                },
            },
            {
                scope: ['source.regexp', 'string.regexp'],
                settings: {
                    foreground: vitesse('regex'),
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
                    foreground: vitesse('string'),
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
                    foreground: vitesse('constant'),
                },
            },
            {
                scope: ['constant.numeric', 'number'],
                settings: {
                    foreground: vitesse('number'),
                },
            },
            {
                scope: ['keyword.other.unit'],
                settings: {
                    foreground: vitesse('builtin'),
                },
            },
            {
                scope: ['constant.language.boolean', 'constant.language'],
                settings: {
                    foreground: vitesse('boolean'),
                },
            },
            {
                scope: 'meta.module-reference',
                settings: {
                    foreground: primary,
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
                    foreground: primary,
                    fontStyle: 'bold',
                },
            },
            {
                scope: 'markup.quote',
                settings: {
                    foreground: vitesse('interface'),
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
                    foreground: primary,
                },
            },
            {
                scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
                settings: {
                    foreground: pick({ dark: primer.red[2] }),
                    background: pick({ dark: primer.red[9] }),
                },
            },
            {
                scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
                settings: {
                    foreground: pick({ dark: primer.green[3] }),
                    background: pick({ dark: primer.green[9] }),
                },
            },
            {
                scope: ['markup.changed', 'punctuation.definition.changed'],
                settings: {
                    foreground: pick({ dark: primer.orange[3] }),
                    background: pick({ dark: primer.orange[8] }),
                },
            },
            {
                scope: ['markup.ignored', 'markup.untracked'],
                settings: {
                    foreground: pick({ dark: primer.gray[8] }),
                    background: pick({ dark: primer.blue[3] }),
                },
            },
            {
                scope: 'meta.diff.range',
                settings: {
                    foreground: pick({ dark: primer.purple[3] }),
                    fontStyle: 'bold',
                },
            },
            {
                scope: 'meta.diff.header',
                settings: {
                    foreground: pick({ dark: primer.blue[3] }),
                },
            },
            {
                scope: 'meta.separator',
                settings: {
                    foreground: pick({ dark: primer.blue[3] }),
                    fontStyle: 'bold',
                },
            },
            {
                scope: 'meta.output',
                settings: {
                    foreground: pick({ dark: primer.blue[3] }),
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
                    foreground: pick({ dark: primer.gray[3] }),
                },
            },
            {
                scope: 'brackethighlighter.unmatched',
                settings: {
                    foreground: pick({ dark: primer.red[2] }),
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
                    foreground: vitesse('string'),
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
                    foreground: vitesse('class'),
                },
            },
            {
                scope: ['entity.other.attribute-name.html.vue'],
                settings: {
                    foreground: vitesse('function'),
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
                    foreground: vitesse('info'),
                },
            },
            {
                scope: 'token.warn-token',
                settings: {
                    foreground: vitesse('warn'),
                },
            },
            {
                scope: 'token.error-token',
                settings: {
                    foreground: vitesse('error'),
                },
            },
            {
                scope: 'token.debug-token',
                settings: {
                    foreground: vitesse('debug'),
                },
            },
        ],
        rules: <any>[],
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
