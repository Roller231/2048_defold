/* eslint-disable @typescript-eslint/no-explicit-any */
/** @noResolution */

declare namespace yandexads {
    export let MSG_ADS_INITED: number;
    export let EVENT_LOADED: number;
    export let MSG_BANNER: number;
    export let MSG_INTERSTITIAL: number;
    export let MSG_REWARDED: number;
    export let EVENT_REWARDED: number;
    export let EVENT_ERROR_LOAD: number;
    export let EVENT_DISMISSED: number;

    export let POS_NONE: number;
    export let POS_TOP_LEFT: number;
    export let POS_TOP_CENTER: number;
    export let POS_TOP_RIGHT: number;
    export let POS_BOTTOM_LEFT: number;
    export let POS_BOTTOM_CENTER: number;
    export let POS_BOTTOM_RIGHT: number;
    export let POS_CENTER: number;


    export function initialize(): void;
    export function set_callback(cb: CallbackExt): void;
    export function load_banner(unitId: string, bannerSize: number): void;
    export function load_interstitial(unitId: string): void;
    export function load_rewarded(unitId: string): void;
    export function show_interstitial(): void;
    export function show_rewarded(): void;
    export function show_banner(pos?: number): void;
    export function hide_banner(): void;
    export function destroy_banner(): void;
    export function is_banner_loaded(): boolean;
    export function is_interstitial_loaded(): boolean;
    export function is_rewarded_loaded(): boolean;
    export function set_user_consent(val: boolean): void; // for 
}

type CallbackExt = (self: Context, message_id: string | hash, message: any) => void;