import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainContentComponent } from './main-content.component';
import { RouterModule } from '@angular/router';
import { WernerwareCarousel } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { WernerwareTabs } from './navbar/tabs.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: MainContentComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ], { useHash: true })
  ],
  declarations: [ 
    AppComponent,
    WernerwareCarousel,
    MainContentComponent,
    AboutComponent,
    WernerwareTabs
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
