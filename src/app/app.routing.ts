import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GearComponent } from './gear/gear.component';
import { TripsComponent } from './trips/trips.component';
import { SkillsComponent } from './skills/skills.component';
import { StoriesComponent } from './stories/stories.component';
import { ImagesComponent } from './images/images.component';
import { MediaComponent } from './media/media.component';
import { SurvivalComponent } from './survival/survival.component';
import { HikesComponent } from './hikes/hikes.component';

const appRoutes: Routes = [
  {
  path: 'gear',
  component: GearComponent
  },
  {
  path: 'trips',
  component: TripsComponent
  },
  {
  path: 'skills',
  component: SkillsComponent
  },
  {
  path: 'survival',
  component: SurvivalComponent
  },
  {
  path: 'media',
  component: MediaComponent
  },
  {
  path: 'images',
  component: ImagesComponent
  },
  {
  path: 'stories',
  component: StoriesComponent
  },
  {
  path: 'hikes',
  component: HikesComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
