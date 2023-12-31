import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { AuthModule } from './auth/auth.module';

//Componentes
import { AppComponent } from './app.component';
import { NpagefoundComponent } from './npagefound/npagefound.component';



@NgModule({
  declarations: [
    AppComponent,
    NpagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
