import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChartsModule, CarouselModule, WavesModule, IconsModule, ButtonsModule } from 'angular-bootstrap-md';
import { TableComponent } from './components/table/table.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { AppRoutingModule } from './app-routing.module';
import { MainAppComponent } from './components/main-app/main-app.component';
import { Card1Component } from './components/cardView/card1/card1.component';
import { Card2Component } from './components/cardView/card2/card2.component';
import { Card3Component } from './components/cardView/card3/card3.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CardsComponent,
    TableComponent,
    GraphicComponent,
    MainAppComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    ChartsModule,
    IconsModule,
    ButtonsModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
