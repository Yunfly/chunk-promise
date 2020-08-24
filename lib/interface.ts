type PormiseParamType<T> = T extends Promise<infer E> ? E : T;

export type PromiseRetrnType<T extends (...args: any) => Promise<any>> = PormiseParamType<ReturnType<T>>