import { Component, OnInit } from '@angular/core';
import { Hike } from '../hike.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { HikeService } from '../hike.service';

@Component({
  selector: 'app-survival',
  templateUrl: './survival.component.html',
  styleUrls: ['./survival.component.css'],
  providers: [HikeService]
})
export class SurvivalComponent implements OnInit {
  hikes: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private hikeService: HikeService){}

  ngOnInit() {
    this.hikes = this.hikeService.getHikes();
  }

  goToDetailPage(clickedHike) {
    console.log(clickedHike);
    this.router.navigate(['hike', clickedHike.$key]);
  };
}
