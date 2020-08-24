"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunkPromise = void 0;
function chunkPromise(promises, size = 10) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!Array.isArray(promises) || !promises.length) {
            return Promise.resolve([]);
        }
        const chunks = [];
        for (let i = 0, j = promises.length; i < j; i += size) {
            chunks.push(promises.slice(i, i + size));
        }
        let collector = Promise.resolve([]);
        try {
            for (var chunks_1 = __asyncValues(chunks), chunks_1_1; chunks_1_1 = yield chunks_1.next(), !chunks_1_1.done;) {
                const chunk = chunks_1_1.value;
                collector = collector.then((results) => __awaiter(this, void 0, void 0, function* () {
                    return yield Promise.all(chunk.map(c => c())).then(subResults => results.concat(subResults));
                }));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (chunks_1_1 && !chunks_1_1.done && (_a = chunks_1.return)) yield _a.call(chunks_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return collector;
    });
}
exports.chunkPromise = chunkPromise;
