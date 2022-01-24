import { Inject, InjectionToken } from "@angular/core";

export interface User{
    name:string;
    age:number;
}

export const USER_CONFIG = new InjectionToken<User>('user config',{
    providedIn:'root',
    factory:()=> ({name:"Sanjay",age:23})
})