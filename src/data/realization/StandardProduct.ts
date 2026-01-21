import type {IProductDescription} from "../model/IProductDescription.ts";
import type {IDataOfImage} from "../model/IDataOfImage.ts";
import {nanoid} from "nanoid";
import type {ISizeOfProduct} from "../model/ISizeOfProduct.ts";

export class StandardProduct implements IProductDescription {
    readonly id: string;
    readonly image: IDataOfImage;
    private readonly pathToWorks: string = '/images/works/';
    readonly size: ISizeOfProduct;
    readonly price: () => string;
    buttonTitle: 'В корзину' | '✖ Убрать';

    constructor(imageNamePathWithCountry: string,
                public readonly mainTitle: string,
                public readonly ownerOrAuthor: string,
                public readonly country: string,
                public readonly technology: string,
                width: number,
                height: number,
                price: number) {
        this.id = nanoid();
        this.image = {
            src: `${this.pathToWorks}${imageNamePathWithCountry}`,
            description: `работа "${mainTitle}"`
        }
        this.size = {
            width: width,
            height: height,
        }
        this.price = () => new Intl.NumberFormat('ru-RU').format(price) + ' руб';
        this.buttonTitle = 'В корзину';
    }
}