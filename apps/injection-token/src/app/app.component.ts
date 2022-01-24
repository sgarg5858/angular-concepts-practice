import { Component, Inject } from '@angular/core';
import { USER_CONFIG,User } from './user.config';

@Component({
  selector: 'dependency-injection-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'injection-token';

  constructor(@Inject(USER_CONFIG)public user:User){}
}
