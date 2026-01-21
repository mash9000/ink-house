import type {IModelOfGoodsStorage} from "../model/IModelOfGoodsStorage.ts";
import type {IProductDescription} from "../model/IProductDescription.ts";
import {StandardProduct} from "./StandardProduct.ts";

export class StandardProductModel implements IModelOfGoodsStorage {
    private readonly goods: Map<string, IProductDescription> = new Map<string, IProductDescription>();

    constructor() {
        const image1 = new StandardProduct(
            'france/1.webp',
            'Охота Амура',
            'Марсель Руссо',
            'Франция',
            'Холст, масло',
            50,
            80,
            14500
        );
        this.goods.set(image1.mainTitle, image1);

        const image2 = new StandardProduct(
            'france/2.webp',
            'Дама с собачкой',
            'Анри Селин',
            'Франция',
            'Акрил, бумага',
            50,
            80,
            16500
        );
        this.goods.set(image2.mainTitle, image2);

        const image3 = new StandardProduct(
            'france/3.webp',
            'Процедура',
            'Франсуа Дюпон',
            'Франция',
            'Цветная литография',
            40,
            60,
            20000
        );
        this.goods.set(image3.mainTitle, image3);

        const image4 = new StandardProduct(
            'france/4.webp',
            'Роза',
            'Луи Детуш',
            'Франция',
            'Бумага, акрил',
            50,
            80,
            12000
        );
        this.goods.set(image4.mainTitle, image4);

        const image5 = new StandardProduct(
            'france/5.webp',
            'Птичья трапеза',
            'Франсуа Дюпон',
            'Франция',
            'Цветная литография',
            40,
            60,
            22500
        );
        this.goods.set(image5.mainTitle, image5);

        const image6 = new StandardProduct(
            'france/6.webp',
            'Пейзаж с рыбой',
            'Пьер Моранж',
            'Франция',
            'Цветная литография',
            40,
            60,
            20000
        );
        this.goods.set(image6.mainTitle, image6);
    }

    obtainTheCountriesOfOriginOfTheArtists(): string[] {
        return Array.from(new Set(Array.from(this.goods.values()).map(p => p.country)))
    }

    receiveAllGoods(): IProductDescription[] {
        return Array.from(this.goods.values());
    }

    receiveAllGoodsFromTheCountry(country: string): IProductDescription[] {
        return [...this.goods.values()].filter((product: IProductDescription) => product.country === country);
    }

    public readonly purchasedGoods: Map<string, IProductDescription> = new Map<string, IProductDescription>();

    addGoodToCart(product: IProductDescription): void {
        if (this.purchasedGoods.has(product.mainTitle)) {
            return;
        }

        this.purchasedGoods.set(product.mainTitle, product);
    }

}