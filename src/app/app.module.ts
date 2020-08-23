import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './components/blocks/menu/menu.component'
import { SliderComponent } from './components/blocks/slider/slider.component'
import { UserComponent } from './components/blocks/user/user.component'
import { CategoriesComponent } from './components/blocks/categories/categories.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    UserComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
