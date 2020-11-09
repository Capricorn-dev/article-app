import { HomePageComponent } from './home-page/home-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CanActivate, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RightContentComponent } from './right-content/right-content.component';
import { LeftContentComponent } from './left-content/left-content.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    RightContentComponent,
    LeftContentComponent,
    ArticleDetailComponent,
    HomePageComponent
  ],
  imports: [
    // BrowserModule
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'article-detail', component: ArticleDetailComponent },
      { path: 'home-page', component: HomePageComponent },
      { path: '', component: HomePageComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
