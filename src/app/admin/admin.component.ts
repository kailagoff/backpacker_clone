import { Component, OnInit } from '@angular/core';
import { Hike} from '../hike.model';
import { HikeService } from '../hike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [HikeService]
})
export class AdminComponent implements OnInit {

  constructor(private hikeService: HikeService) { }

  ngOnInit() {
  }

  submitForm(title: string, location: string, distance: string, content: string, image: string, image2: string) {
   var newHike: Hike = new Hike(title, location, distance, content, image, image2);
   console.log(newHike);
   this.hikeService.addHike(newHike);
 }

}
