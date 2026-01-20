import type {IProduct} from "../../ProductCard/model/IProduct.ts";

export interface IGetCountriesFromWorks {
    getCountries(): string[];

    getProductsByCountry(country: string): IProduct[];
}