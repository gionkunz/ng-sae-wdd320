import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RouteAComponent } from './route-a/route-a.component';
import { RouteBComponent } from './route-b/route-b.component';
import { RouteCComponent } from './route-c/route-c.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteAComponent,
    RouteBComponent,
    RouteCComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'route-a', component: RouteAComponent, children: [
        {path: 'b-in-a', component: RouteBComponent}
      ]},
      {path: 'route-b', component: RouteBComponent},
      {path: 'route-c/:id', component: RouteCComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
