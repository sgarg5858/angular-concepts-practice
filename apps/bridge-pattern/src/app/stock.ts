import { InjectionToken } from "@angular/core";

export interface Stock{
    price:number;
    change:number;
    holdings:number;
    buy :()=> number;
    sell:()=>number;
}

export const STOCK_TOKEN = new InjectionToken<Stock>('Stock')