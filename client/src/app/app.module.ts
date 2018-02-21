import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { LoginComponent } from './login/login.component';

const routes = [
  {path: 'login', component: LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
