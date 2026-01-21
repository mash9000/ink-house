import type {IProduct} from "../../ProductCard/model/IProduct.ts";

export interface IModelOfGoodsStorage {
    receiveAllGoods(): IProduct[];

    receiveAllGoodsFromTheCountry(country: string): IProduct[];

    obtainTheCountriesOfOriginOfTheArtists(): string[];

    readonly purchasedGoods: Map<string, IProduct>;

    addGoodToCart(product: IProduct): void;
}