import { Injectable } from '@angular/core';
import { Hike } from './hike.model';
// import { HIKES } from './mock-hike';
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

}
