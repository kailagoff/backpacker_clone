import { Component, OnInit } from '@angular/core';
import { Hike} from '../hike.model';
import { HikeService } from '../hike.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [HikeService, AuthenticationService]
})
export class AdminComponent {
  user;
  public isLoggedIn: Boolean;
  public userName: String;

  constructor(private hikeService: HikeService, public authService: AuthenticationService) {

    this.authService.user.subscribe(user => {
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

  submitForm(title: string, location: string, distance: string, content: string, image: string, image2: string) {
   var newHike: Hike = new Hike(title, location, distance, content, image, image2);
   console.log(newHike);
   this.hikeService.addHike(newHike);
 }

}
