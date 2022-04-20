                                                                                                                                   import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';



@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListarComponent
  ]
})
export class ProfessoresModule { }
