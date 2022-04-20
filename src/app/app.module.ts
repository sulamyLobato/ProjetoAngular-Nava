app.module.ts                                                                                                                                                    import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProfessoresModule } from './professores/professores.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   FormsModule,
   ProfessoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
