import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { AppInitService } from './app-init.service';
import { firstValueFrom } from 'rxjs';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule,HttpClientModule],
  providers: [
    {provide:APP_INITIALIZER,
    useFactory:(injector:Injector)=>{
      const appInitService=injector.get(AppInitService);
      return ():Promise<any>=> firstValueFrom(appInitService.loadDataFromApi())
    }
    ,deps:[Injector],
    multi:true
  }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
