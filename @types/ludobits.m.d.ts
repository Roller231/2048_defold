/** @noResolution */
declare module 'ludobits.m.flow' {
    type CallbackFnc = () => void;
    type CallbackError = (err: string) => void;

    export function start(fn: Callback, options?: any, on_error?: CallbackError): Coroutine;
    export function stop(cor?: Coroutine): void;
    export function delay(s: number): void;
    export function frames(cnt: number): void;
    export function yield(): void;
    export function on_input(action_id: string | hash, action: any): void;
    export function on_message(message_id: hash, message: any, sender: any): void;
    export function until_input_released(action: hash): LuaMultiReturn<[string | hash, any]>;
    export function until_message(message: hash): LuaMultiReturn<[hash, any, any]>;
    export function until_any_message(): LuaMultiReturn<[hash, any, any]>;
    export function until_callback(cb: any): void;
    export function go_animate(url: string | hash | url, property: string | hash, playback: any, to: number | vmath.vector3 | vmath.vector4 | vmath.quaternion, easing: any, duration: number, delay?: number): void;
}

interface IVector2 {
    x: number;
    y: number;
}

/** @noResolution */
declare module 'ludobits.m.bezier' {
    export function create(cp: IVector2[], points: number): vmath.vector3[];
}



interface Coroutine {
    id: number;
    url: url;
    state: string;
    co: LuaThread;
    timer_id: number;
}

/** @noResolution */
declare module 'ludobits.m.signal' {
    export function create(name: string): ISignalFlow;
}

type SignalCallback = (message: any) => void;

/** @noSelf **/
interface ISignalFlow {
    trigger: (data?: any) => void;
    add: (cb?: SignalCallback) => void;
    remove: (cb?: SignalCallback) => void;
}

type MessageCallback = (message: any, sender: hash) => void;

/** @noResolution */
declare module 'ludobits.m.broadcast' {
    export function register(name: string | hash, handler?: MessageCallback): void;
    export function unregister(name: string | hash): void;
    export function send(message_id: string | hash, message?: any): void;
    export function on_message(message_id: hash, message: any, sender: hash): void;
}
