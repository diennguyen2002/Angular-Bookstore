import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/pages/home/home.component';
import { CatComponent } from './components/pages/cat/cat.component';
import { DetailComponent } from './components/pages/detail/detail.component';

const routes: Routes = [
  { path: 'cat', component: CatComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    CatComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
