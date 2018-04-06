import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.component.html',
  styleUrls: ['./hike-detail.component.css']
})
export class HikeDetailComponent implements OnInit {
  hikes: FirebaseListObservable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}
