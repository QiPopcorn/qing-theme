import { colors } from './colors';

function toArray<T>(arr: T | T[]): T[] {
    if (Array.isArray(arr)) return arr;
    return [arr];
}

export function getColors(style) {
    if (style === 'dark') {
        /* The array of light to dark colors are reversed to auto-generate dark theme */
        return colors;
    } else {
        return colors;
    }
}
