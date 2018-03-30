import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { GearComponent } from './gear/gear.component';
import { TripsComponent } from './trips/trips.component';
import { SkillsComponent } from './skills/skills.component';
import { SurvivalComponent } from './survival/survival.component';
import { MediaComponent } from './media/media.component';
import { ImagesComponent } from './images/images.component';
import { StoriesComponent } from './stories/stories.component';
import { HikesComponent } from './hikes/hikes.component';


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
    HikesComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
