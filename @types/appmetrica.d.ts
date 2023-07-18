/** @noResolution */

declare namespace appmetrica {
    export function initialize(key: string): void;
    export function set_callback(cb: Callback): void;
    export function report_event(event: string, json: string): void;
}

