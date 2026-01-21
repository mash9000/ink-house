import type {IProductDescription} from "./IProductDescription.ts";

export interface IModelOfGoodsStorage {
    receiveAllGoods(): IProductDescription[];

    receiveAllGoodsFromTheCountry(country: string): IProductDescription[];

    obtainTheCountriesOfOriginOfTheArtists(): string[];

    readonly purchasedGoods: Map<string, IProductDescription>;

    addGoodToCart(product: IProductDescription): void;
}