import type {IViewCurrency} from "./IViewCurrency.ts";
import type {ISizeOfProduct} from "./ISizeOfProduct.ts";
import type {IDataOfImage} from "./IDataOfImage.ts";

export interface IProduct {
    id: string;
    image: IDataOfImage;
    ownerOrAuthor: string;
    mainTitle: string;
    technology?: string;
    size?: ISizeOfProduct
    price: IViewCurrency;
    buttonTitle: string;
}