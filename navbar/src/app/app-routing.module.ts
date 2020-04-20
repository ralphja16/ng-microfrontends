import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import {APP_BASE_HREF} from '@angular/common';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: EmptyRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
})
export class AppRoutingModule {
}
