import type {IGetCountriesFromWorks} from "../model/IGetCountriesFromWorks.ts";
import {Products} from "./Products.ts";
import type {IProduct} from "../../ProductCard/model/IProduct.ts";

export class RepositoryOfAllCountriesFromWorks implements IGetCountriesFromWorks {
    constructor(private readonly products: Products) {
    }

    getCountries(): string[] {
        return [...new Set<string>(this.products.getProducts().map((product: IProduct) => product.country))];
    }

    getProductsByCountry(country: string): IProduct[] {
        return this.products.getProducts().filter((product: IProduct) => product.country === country);
    }
}