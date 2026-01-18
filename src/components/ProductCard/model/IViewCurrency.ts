export interface IViewCurrency {
    value: number;
    getViewOfCurrency(price: number): string;
}