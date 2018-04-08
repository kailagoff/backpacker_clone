import { Component, Input, OnInit } from '@angular/core';
import { Hike } from '../hike.model';
import { HikeService } from '../hike.service';

@Component({
  selector: 'app-edit-hike',
  templateUrl: './edit-hike.component.html',
  styleUrls: ['./edit-hike.component.css'],
  providers: [HikeService]
})
export class EditHikeComponent implements OnInit {
  @Input() selectedHike;

  constructor(private hikeService: HikeService) { }

  ngOnInit() {
  }

  beginUpdatingHike(hikeToUpdate){
    this.hikeService.updateHike(hikeToUpdate);
  }

  beginDeletingHike(hikeToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.hikeService.deleteHike(hikeToDelete);
      }
    }

}
