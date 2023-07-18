/* eslint-disable @typescript-eslint/no-explicit-any */
/** @noResolution */


declare module 'richtext.richtext' {
    export let ALIGN_LEFT: number;
    export let ALIGN_CENTER: number;
    export let ALIGN_RIGHT: number;
    export let ALIGN_JUSTIFY: number;
    export function create(text: string, font: string, settings: any): RichData;
    export function remove(words: RichData): void;
}

type RichData = LuaTable;