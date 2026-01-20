import type {IProduct} from "../ProductCard/model/IProduct.ts";
import {nanoid} from "nanoid";

export class Products {
    constructor(private readonly functionToAddAnItemToTheShoppingCart: () => void) {
    }

    public getProducts(): IProduct[] {
        return [
            {
                id: nanoid(),
                image: {
                    src: 'images/works/france/1.webp',
                    description: 'работа "Охота Амура"'
                },
                ownerOrAuthor: 'Марсель Руссо',
                mainTitle: 'Охота Амура',
                technology: 'Холст, масло',
                size: {
                    width: 50,
                    height: 80
                },
                price: {
                    value: 14500,
                    getViewOfCurrency(price: number): string {
                        return new Intl.NumberFormat("ru").format(price) + ' руб'
                    }
                },
                buttonTitle: 'В корзину',
                addToCart: () => this.functionToAddAnItemToTheShoppingCart()
            },
            {
                id: nanoid(),
                image: {
                    src: 'images/works/france/2.webp',
                    description: 'работа "Дама с собачкой"'
                },
                ownerOrAuthor: 'Анри Селин',
                mainTitle: 'Дама с собачкой',
                technology: 'Акрил, бумага',
                size: {
                    width: 50,
                    height: 80
                },
                price: {
                    value: 16500,
                    getViewOfCurrency(price: number): string {
                        return new Intl.NumberFormat("ru").format(price) + ' руб'
                    }
                },
                buttonTitle: 'В корзину',
                addToCart: () => this.functionToAddAnItemToTheShoppingCart()
            },
            {
                id: nanoid(),
                image: {
                    src: 'images/works/france/3.webp',
                    description: 'работа "Процедура"'
                },
                ownerOrAuthor: 'Франса Дюпон',
                mainTitle: 'Процедура',
                technology: 'Цветная литография',
                size: {
                    width: 40,
                    height: 60
                },
                price: {
                    value: 20000,
                    getViewOfCurrency(price: number): string {
                        return new Intl.NumberFormat("ru").format(price) + ' руб'
                    }
                },
                buttonTitle: 'В корзину',
                addToCart: () => this.functionToAddAnItemToTheShoppingCart()
            },
            {
                id: nanoid(),
                image: {
                    src: 'images/works/france/4.webp',
                    description: 'работа "Роза"'
                },
                ownerOrAuthor: 'Луи Детуш',
                mainTitle: 'Роза',
                technology: 'Бумага, акрил',
                size: {
                    width: 50,
                    height: 80
                },
                price: {
                    value: 12000,
                    getViewOfCurrency(price: number): string {
                        return new Intl.NumberFormat("ru").format(price) + ' руб'
                    }
                },
                buttonTitle: 'В корзину',
                addToCart: () => this.functionToAddAnItemToTheShoppingCart()
            },
            {
                id: nanoid(),
                image: {
                    src: 'images/works/france/5.webp',
                    description: 'работа "Птичья трапеза"'
                },
                ownerOrAuthor: 'Франсуа Дюпон',
                mainTitle: 'Птичья трапеза',
                technology: 'Цветная литография',
                size: {
                    width: 40,
                    height: 60
                },
                price: {
                    value: 12500,
                    getViewOfCurrency(price: number): string {
                        return new Intl.NumberFormat("ru").format(price) + ' руб'
                    }
                },
                buttonTitle: 'В корзину',
                addToCart: () => this.functionToAddAnItemToTheShoppingCart()
            },
            {
                id: nanoid(),
                image: {
                    src: 'images/works/france/6.webp',
                    description: 'работа "Пейзаж с рыбой"'
                },
                ownerOrAuthor: 'Пьер Моранж',
                mainTitle: 'Пейзаж с рыбой',
                technology: 'Цветная литография',
                size: {
                    width: 40,
                    height: 60
                },
                price: {
                    value: 20000,
                    getViewOfCurrency(price: number): string {
                        return new Intl.NumberFormat("ru").format(price) + ' руб'
                    }
                },
                buttonTitle: 'В корзину',
                addToCart: () => this.functionToAddAnItemToTheShoppingCart()
            },
        ]
    }
}