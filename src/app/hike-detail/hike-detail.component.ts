import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hike } from '../hike.model';
import { HikeService } from '../hike.service';
import { FirebaseObjectObservable } from 'angularfire2/database';



@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.component.html',
  styleUrls: ['./hike-detail.component.css'],
  providers: [HikeService]
})
export class HikeDetailComponent implements OnInit {
  hikes: FirebaseListObservable<any[]>;
  hikesId: string;
  hikeToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private hikeService: HikeService ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.hikesId = urlParameters['id']
    });
    this.hikeToDisplay = this.hikeService.getHikeById(this.hikesId);
  }

}
