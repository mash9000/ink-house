import type {IProductDescription} from "../model/IProductDescription.ts";
import {nanoid} from "nanoid";

export const products: IProductDescription[] = [
    {
        id: nanoid(),
        image: {
            src: 'images/works/france/1.webp',
            description: 'работа "Охота Амура"'
        },
        ownerOrAuthor: 'Марсель Руссо',
        mainTitle: 'Охота Амура',
        country: 'Франция',
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
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/france/2.webp',
            description: 'работа "Дама с собачкой"'
        },
        ownerOrAuthor: 'Анри Селин',
        mainTitle: 'Дама с собачкой',
        country: 'Франция',
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
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/france/3.webp',
            description: 'работа "Процедура"'
        },
        ownerOrAuthor: 'Франса Дюпон',
        mainTitle: 'Процедура',
        country: 'Франция',
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
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/france/4.webp',
            description: 'работа "Роза"'
        },
        ownerOrAuthor: 'Луи Детуш',
        mainTitle: 'Роза',
        country: 'Франция',
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
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/france/5.webp',
            description: 'работа "Птичья трапеза"'
        },
        ownerOrAuthor: 'Франсуа Дюпон',
        mainTitle: 'Птичья трапеза',
        country: 'Франция',
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
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/france/6.webp',
            description: 'работа "Пейзаж с рыбой"'
        },
        ownerOrAuthor: 'Пьер Моранж',
        mainTitle: 'Пейзаж с рыбой',
        country: 'Франция',
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
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/germany/1.webp',
            description: 'работа "Над городом"'
        },
        ownerOrAuthor: 'Курт Вернер',
        mainTitle: 'Над городом',
        country: 'Германия',
        technology: 'Цветная литография',
        size: {
            width: 40,
            height: 60
        },
        price: {
            value: 16000,
            getViewOfCurrency(price: number): string {
                return new Intl.NumberFormat("ru").format(price) + ' руб'
            }
        },
        buttonTitle: 'В корзину',
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/germany/2.webp',
            description: 'работа "Птенцы"'
        },
        ownerOrAuthor: 'Макс Рихтер',
        mainTitle: 'Птенцы',
        country: 'Германия',
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
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/germany/3.webp',
            description: 'работа "Среди листьев"'
        },
        ownerOrAuthor: 'Мартин Майер',
        mainTitle: 'Среди листьев',
        country: 'Германия',
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
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/germany/4.webp',
            description: 'работа "Яркая птица"'
        },
        ownerOrAuthor: 'Герман Беккер',
        mainTitle: 'Яркая птица',
        country: 'Германия',
        technology: 'Цветная литография',
        size: {
            width: 40,
            height: 60
        },
        price: {
            value: 13000,
            getViewOfCurrency(price: number): string {
                return new Intl.NumberFormat("ru").format(price) + ' руб'
            }
        },
        buttonTitle: 'В корзину',
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/germany/5.webp',
            description: 'работа "Дятлы"'
        },
        ownerOrAuthor: 'Вульф Бауэр',
        mainTitle: 'Дятлы',
        country: 'Германия',
        technology: 'Бумага, акрил',
        size: {
            width: 50,
            height: 80
        },
        price: {
            value: 20000,
            getViewOfCurrency(price: number): string {
                return new Intl.NumberFormat("ru").format(price) + ' руб'
            }
        },
        buttonTitle: 'В корзину',
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/germany/6.webp',
            description: 'работа "Большие воды"'
        },
        ownerOrAuthor: 'Вальтер Хартман',
        mainTitle: 'Большие воды',
        country: 'Германия',
        technology: 'Бумага, акрил',
        size: {
            width: 50,
            height: 80
        },
        price: {
            value: 23000,
            getViewOfCurrency(price: number): string {
                return new Intl.NumberFormat("ru").format(price) + ' руб'
            }
        },
        buttonTitle: 'В корзину',
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/england/1.webp',
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
            getViewOfCurrency(price: number): string {
                return new Intl.NumberFormat("ru").format(price) + ' руб'
            }
        },
        buttonTitle: 'В корзину',
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/england/2.webp',
            description: 'работа "Скалистый берег"'
        },
        ownerOrAuthor: 'Джон Уайн',
        mainTitle: 'Скалистый берег',
        country: 'Англия',
        technology: 'Цветная литография',
        size: {
            width: 40,
            height: 60
        },
        price: {
            value: 17500,
            getViewOfCurrency(price: number): string {
                return new Intl.NumberFormat("ru").format(price) + ' руб'
            }
        },
        buttonTitle: 'В корзину',
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/england/3.webp',
            description: 'работа "Река и горы"'
        },
        ownerOrAuthor: 'Джим Уотсон',
        mainTitle: 'Река и горы',
        country: 'Англия',
        technology: 'Акварель, бумага',
        size: {
            width: 50,
            height: 80
        },
        price: {
            value: 20500,
            getViewOfCurrency(price: number): string {
                return new Intl.NumberFormat("ru").format(price) + ' руб'
            }
        },
        buttonTitle: 'В корзину',
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/england/4.webp',
            description: 'работа "Белый попугай"'
        },
        ownerOrAuthor: 'Юджин Зиллион',
        mainTitle: 'Белый попугай',
        country: 'Англия',
        technology: 'Цветная литография',
        size: {
            width: 40,
            height: 60
        },
        price: {
            value: 15500,
            getViewOfCurrency(price: number): string {
                return new Intl.NumberFormat("ru").format(price) + ' руб'
            }
        },
        buttonTitle: 'В корзину',
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/england/5.webp',
            description: 'работа "Ночная рыба"'
        },
        ownerOrAuthor: 'Эрик Гиллман',
        mainTitle: 'Ночная рыба',
        country: 'Англия',
        technology: 'Бумага, акрил',
        size: {
            width: 50,
            height: 80
        },
        price: {
            value: 12500,
            getViewOfCurrency(price: number): string {
                return new Intl.NumberFormat("ru").format(price) + ' руб'
            }
        },
        buttonTitle: 'В корзину',
    },
    {
        id: nanoid(),
        image: {
            src: 'images/works/england/6.webp',
            description: 'работа "Рыжий кот"'
        },
        ownerOrAuthor: 'Альфред Барр',
        mainTitle: 'Рыжий кот',
        country: 'Англия',
        technology: 'Цветная литография',
        size: {
            width: 40,
            height: 60
        },
        price: {
            value: 21500,
            getViewOfCurrency(price: number): string {
                return new Intl.NumberFormat("ru").format(price) + ' руб'
            }
        },
        buttonTitle: 'В корзину'
    }
]