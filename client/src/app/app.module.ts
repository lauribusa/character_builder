import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { LoginComponent } from './login/login.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes = [
  { path: '',  redirectTo: 'characterList', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'characterList', component: CharacterListComponent },
  { path: 'character', component: CharacterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterListComponent,
    LoginComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
