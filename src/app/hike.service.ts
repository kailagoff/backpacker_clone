import { Injectable } from '@angular/core';
import { Hike } from './hike.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class HikeService {
  hikes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.hikes = database.list('hikes');
 }

 getHikes(){
    return this.hikes;
  }

  getHikeById(hikesId: string) {
    return this.database.object('/hikes/' + hikesId);
  }

  addHike(newHike: Hike) {
    this.hikes.push(newHike);
  }

}
