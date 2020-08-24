import { PromiseRetrnType } from "./interface";
export declare function chunkPromise<T extends (...args: any) => Promise<any>>(promises: Array<T>, size?: number): Promise<PromiseRetrnType<T>[]>;
