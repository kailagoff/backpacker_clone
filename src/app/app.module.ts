import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { GearComponent } from './gear/gear.component';
import { TripsComponent } from './trips/trips.component';
import { SkillsComponent } from './skills/skills.component';
import { SurvivalComponent } from './survival/survival.component';
import { MediaComponent } from './media/media.component';
import { ImagesComponent } from './images/images.component';
import { StoriesComponent } from './stories/stories.component';
import { HikesComponent } from './hikes/hikes.component';
import { HikeDetailComponent } from './hike-detail/hike-detail.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    GearComponent,
    TripsComponent,
    SkillsComponent,
    SurvivalComponent,
    MediaComponent,
    ImagesComponent,
    StoriesComponent,
    HikesComponent,
    HikeDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
