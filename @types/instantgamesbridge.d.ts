/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
/// <library version="0.10.1" src="https://github.com/Insality/druid/archive/master.zip" />
/** @noResolution */

declare module 'instantgamesbridge.instantgamesbridge' {
    let exports: InstantGamesBridge;
    export = exports;
}

/** @noSelf **/
interface InstantGamesBridge {
    callbacks: {
        rewarded_state_changed: (state: any) => void;
        interstitial_state_changed: (state: any) => void;
    };
    init: (callback: any) => void;
    call_native_sdk: (method: string, parameters?: any, callback?: any) => any;
    get_platform_id: () => string;
    get_language: () => any;
    get_payload: () => any; //URL
    ads_set_minimum_delay_between_interstitial: (seconds: number) => void;
    ads_show_interstitial: (interstitial_options?: LuaTable | null, callback?: any) => void;
    ads_show_rewarded: (callback?: any) => void;
    ads_show_banner: (interstitial_options?: any, callback?: any) => void;
    ads_hide_banner: (callback?: any) => void;
    game_get_data: (key: string, callback: any) => any;
    game_set_data: (name: string, val: any, callback: any) => void;
    social: () => any;
    social_share: (shareOptions: any, callback: any) => void;
    social_join_community: (joinCommunityOptions: any, callback: any) => void;
    social_invite_friends: (callback: any) => void;
    yandex_set_leaderboard: (setScoreOptions: any, callback: any) => void;
    yandex_get_leaderboard: (getScoreOptions: any, callback: any) => number | string;
    yandex_get_entitys: (options: any, callback: any) => number | string;
    rate: (callback: any) => void;
    get_property_name: (prop: Array<string>, callback: any) => void;
    social_add_favotire: (callback: any) => void;
    player_init: (authorizationOptions: any, callback: any) => void;
}

type InitCallback = () => void;
