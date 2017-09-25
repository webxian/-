import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TextComponent } from './components/text/text.component';
import { TextDetailsComponent } from './components/text-details/text-details.component';
import { GowithComponent } from './components/gowith/gowith.component';
import { GowithDetailsComponent } from './components/gowith-details/gowith-details.component';
import { PutGowithComponent } from './components/put-gowith/put-gowith.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    TextComponent,
    TextDetailsComponent,
    GowithComponent,
    GowithDetailsComponent,
    PutGowithComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
