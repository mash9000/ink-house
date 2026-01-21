import type {ISizeOfProduct} from "./ISizeOfProduct.ts";
import type {IDataOfImage} from "./IDataOfImage.ts";

export interface IProductDescription {
    readonly id: string;
    readonly image: IDataOfImage;
    readonly ownerOrAuthor: string;
    readonly mainTitle: string;
    readonly country: string;
    readonly technology?: string;
    readonly size?: ISizeOfProduct;
    readonly price: () => string;
    buttonTitle: string;
}