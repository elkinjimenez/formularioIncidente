import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AcordeonComponent } from './acordeon/acordeon.component';
import { SharedModule } from '../Shared/shared.module';
import { DatosUsuarioComponent } from './datos-usuario/datos-usuario.component';
import { DetallesComponent } from './detalles/detalles.component';
import { PrincipalArticulosComponent } from './principal-articulos/principal-articulos.component';

@NgModule({
  declarations: [AcordeonComponent, DatosUsuarioComponent, DetallesComponent, PrincipalArticulosComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    AcordeonComponent,
  ]
})
export class ModulesModule { }
