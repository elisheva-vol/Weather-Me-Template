import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { FavoritesPage } from './pages/favorites/favorites.page';
import { SearchPage } from './pages/search/search.page';
import { WeatherRoutingModule } from './weather-routing.module';



@NgModule({
  declarations: [
    SearchPage, 
    FavoritesPage
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MaterialModule,
  ]
})
export class WeatherModule { }
