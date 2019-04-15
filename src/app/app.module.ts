import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppLeftMenuComponent } from './components/app-left-menu/app-left-menu.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppModalAutorizationComponent } from './components/app-modal-autorization/app-modal-autorization.component';
import { ContentItemsNewsComponent } from './components/content-items-news/content-items-news.component';
import { ContentItemsNewsRightComponent } from './components/content-items-news-right/content-items-news-right.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppLeftMenuComponent,
    AppContentComponent,
    AppModalAutorizationComponent,
    ContentItemsNewsComponent,
    ContentItemsNewsRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
