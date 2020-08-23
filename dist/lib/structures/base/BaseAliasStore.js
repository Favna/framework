"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAliasStore = void 0;
const pieces_1 = require("@sapphire/pieces");
const Events_1 = require("../../types/Events");
class BaseAliasStore extends pieces_1.AliasStore {
    constructor(client, Ctor) {
        super(Ctor, {
            onError: (error) => client.emit(Events_1.Events.Error, error),
            onUnload: (store, piece) => client.emit(Events_1.Events.Unload, store, piece),
            onPostLoad: (store, piece) => client.emit(Events_1.Events.PostLoad, store, piece)
        });
        this.client = client;
    }
    get extras() {
        return { ...super.extras, client: this.client };
    }
}
exports.BaseAliasStore = BaseAliasStore;
//# sourceMappingURL=BaseAliasStore.js.map