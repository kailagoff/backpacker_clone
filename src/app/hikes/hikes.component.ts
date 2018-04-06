import { Component, OnInit } from '@angular/core';
import { Hike } from '../hike.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { HikeService } from '../hike.service';

@Component({
  selector: 'app-hikes',
  templateUrl: './hikes.component.html',
  styleUrls: ['./hikes.component.css'],
  providers: [HikeService]
})
export class HikesComponent implements OnInit {
  hikes: FirebaseListObservable<any[]>;
  constructor(private router: Router, private hikeService: HikeService){}

  ngOnInit() {
    this.hikes = this.hikeService.getHikes();
  }

  goToDetailPage(clickedHike: Hike) {
    this.router.navigate(['hike', clickedHike.id]);
    console.log("hi");
  };


  // goToDetailPage(clickedHike) {
  //   this.router.navigate(['hike', clickedHike.id]);
  // };

}


















//   initMap(){
//     //map options
//     var options = {
//       zoom: 10,
//       center:{lat:45.5231,lng:-122.6765}
//     }
//     // new map
//     var map = new google.maps.Map(document.getElementById('map'), options);
//
//     addMarker({
//       coords:{lat:45.5863,lng:-122.75502},
//       content:'<h6></h6>'
//     });
//     addMarker({
//       coords:{lat:45.5853,lng:-122.7719426},
//       content:'<h6></h6>'
//     });
//
//     addMarker({
//       coords:{lat:45.52687,lng:-122.726793},
//       content:'<h6>n</h6>'
//     });
//
//     addMarker({
//       coords:{lat:45.4735,lng:-122.604},
//       content:'<h6></h6>'
//     });
//     addMarker({
//       coords:{lat:45.4748,lng:-122.5489},
//       content:'<h6></h6>'
//     });
//     addMarker({
//       coords:{lat:45.516018,lng:-122.681425},
//       content:'<h6></h6>'
//     });
//     addMarker({
//       coords:{lat:45.511617,lng:-122.532094},
//       content:'<h6></h6>'
//     });
//
//     addMarker({
//       coords:{lat:45.562806,lng:-122.620408},
//       content:'<h6></h6>'
//     });
//     addMarker({
//       coords:{lat:45.516018,lng:-122.681425},
//       content:'<h6></h6>'
//     });
//     addMarker({
//       coords:{lat:45.516018,lng:-122.681425},
//       content:'<h6></h6>'
//     });
//     addMarker({
//       coords:{lat:45.568261,lng:-122.653972},
//       content:'<h6></h6>'
//     });
//
//     addMarker({
//       coords:{lat:45.4978,lng:-122.6782},
//       content:'<h6></h6>'
//     });
//     addMarker({
//       coords:{lat:45.511617,lng:-122.532094},
//       content:'<h6></h6>'
//     });
//     function addMarker(props) {
//       var marker = new google.maps.Marker({
//         position:props.coords,
//         map: map
//       });
//     if(props.content){
//     var infoWindow = new google.maps.InfoWindow({
//       content: props.content
//     });
//     marker.addListener('click', function(){
//       infoWindow.open(map, marker);
//       });
//     };
//   };
// };
