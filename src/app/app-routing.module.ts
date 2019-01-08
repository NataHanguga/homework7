import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { SliderComponent } from './components/slider/slider.component';
import { TableComponent } from './components/table/table.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { Card1Component } from './components/cardView/card1/card1.component';
import { Card2Component } from './components/cardView/card2/card2.component';
import { Card3Component } from './components/cardView/card3/card3.component';




const appRoures: Routes = [
  { path: '', component: MainAppComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'charts', component: GraphicComponent },
  { path: 'table', component: TableComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'cards/1', component: Card1Component },
  { path: 'cards/2', component: Card2Component },
  { path: 'cards/3', component: Card3Component }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoures)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
