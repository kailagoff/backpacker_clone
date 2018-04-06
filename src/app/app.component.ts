import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Hike } from './hike.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})

export class AppComponent {
  title = 'BACKPACKER';
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  public selectedHike = null;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
          this.userName = user.displayName;
        }
      });
    }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
