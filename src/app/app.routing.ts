import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GearComponent } from './gear/gear.component';

import { MediaComponent } from './media/media.component';
import { SurvivalComponent } from './survival/survival.component';
import { HomeComponent } from './home/home.component';

import { HikesComponent } from './hikes/hikes.component';
import { HikeDetailComponent }   from './hike-detail/hike-detail.component';

const appRoutes: Routes = [
  {
  path: 'gear',
  component: GearComponent
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
  path: 'hikes',
  component: HikesComponent,
  },
  {
  path: 'hikes/:id',
  component: HikeDetailComponent,
  },
  {
  path: 'home',
  component: HomeComponent,
  },
  {
  path: 'home/gear',
  component: GearComponent,
  },
  {
  path: 'home/survival',
  component: SurvivalComponent,
  },
  {
  path: 'home/media',
  component: MediaComponent,
  },
  {
  path: 'home/hikes',
  component: HikesComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
