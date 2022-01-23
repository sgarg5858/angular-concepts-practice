import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import {HttpClientModule} from'@angular/common/http'
import { DecideBootstrapComponentService } from './decide-bootstrap-component.service';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, AComponent, BComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    HttpClientModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {

  constructor(private decideBootstrapComponentService:DecideBootstrapComponentService){}
  ngDoBootstrap(appRef: ApplicationRef): void {


    appRef.isStable.subscribe((status)=>{
      console.log(status);
    })
      this.decideBootstrapComponentService.getDataFromBackend().subscribe((length)=>{


        console.log(length);
        
        const statusElement=document.querySelector('#status');
        if(statusElement)
        {
          statusElement.textContent="";

        }
        if(length!=10)
        {
          const componentElement= document.createElement('dependency-injection-a');
          document.body.appendChild(componentElement);
          appRef.bootstrap(AComponent)
        }
        else
        {
          const componentElement= document.createElement('dependency-injection-b');
          document.body.appendChild(componentElement);
          appRef.bootstrap(BComponent)
        }
        
      },
      (error)=>{
        const statusElement=document.querySelector('#status');
        if(statusElement)
        {
          statusElement.textContent="Not Working now. Please try in sometime";
        }
      }
      )
      
  }
}
