import { InjectionToken } from "@angular/core";

export interface Child{
    condition:boolean;
    toggleCondition:()=>void;
}
export const CHILD_TOKEN = new InjectionToken<Child>('Child');