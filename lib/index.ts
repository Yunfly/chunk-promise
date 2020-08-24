import { PromiseRetrnType } from "./interface";

export async function chunkPromise<T extends (...args: any) => Promise<any>>(
  promises: Array<T>,
  size = 10,
): Promise<PromiseRetrnType<T>[]> {
  if (!Array.isArray(promises) || !promises.length) {
    return Promise.resolve([]);
  }

  const chunks: typeof promises[] = [];
  for (let i = 0, j = promises.length; i < j; i += size) {
    chunks.push(promises.slice(i, i + size));
  }

  let collector: Promise<PromiseRetrnType<T>[]> = Promise.resolve([]);

  for await (const chunk of chunks) {
    collector = collector.then(
      async results =>
        await Promise.all(chunk.map(c => c())).then(subResults =>
          results.concat(subResults),
        ),
    );
  }
  return collector;
}