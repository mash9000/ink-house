import type {IModelOfGoodsStorage} from "../model/IModelOfGoodsStorage.ts";
import type {IProduct} from "../../ProductCard/model/IProduct.ts";

export class StandardProductModel implements IModelOfGoodsStorage {
    private readonly goods: Map<string, IProduct> = new Map<string, IProduct>([
        ['aaa', {
            id: 'aaa',
            image: {
                src: '/images/works/england/1.webp',
                description: 'работа "Дикий зверь"'
            },
            ownerOrAuthor: 'Пол Смит',
            mainTitle: 'Дикий зверь',
            country: 'Англия',
            technology: 'Акварель, бумага',
            size: {
                width: 50,
                height: 80
            },
            price: {
                value: 19500,
                getViewOfCurrency: (price: number) => `${price} руб`
            },
            buttonTitle: 'В корзину'
        }],
        ['bbb', {
            id: 'bbb',
            image: {
                src: '/images/works/england/2.webp',
                description: 'работа "Скалистый берег"'
            },
            ownerOrAuthor: 'Джон Уайт',
            mainTitle: 'Скалистый берег',
            country: 'Англия',
            technology: 'Цветная литография',
            size: {
                width: 40,
                height: 60
            },
            price: {
                value: 17500,
                getViewOfCurrency: (price: number) => `${price} руб`
            },
            buttonTitle: 'В корзину'
        }]
    ]);

    obtainTheCountriesOfOriginOfTheArtists(): string[] {
        return Array.from(new Set(Array.from(this.goods.values()).map(p => p.country)))
    }

    receiveAllGoods(): IProduct[] {
        return Array.from(this.goods.values());
    }

    receiveAllGoodsFromTheCountry(country: string): IProduct[] {
        return [...this.goods.values()].filter((product: IProduct) => product.country === country);
    }

    public readonly purchasedGoods: Map<string, IProduct> = new Map<string, IProduct>();

    addGoodToCart(product: IProduct): void {
        if (this.purchasedGoods.has(product.id)) {
            return;
        }

        this.purchasedGoods.set(product.id, product);
    }

}