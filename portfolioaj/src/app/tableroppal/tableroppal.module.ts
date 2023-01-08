import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfodisenoComponent } from './infodiseno/infodiseno.component';
import { InfoprogramaComponent } from './infoprograma/infoprograma.component';
import { InfoformacionComponent } from './infoformacion/infoformacion.component';



@NgModule({
  declarations: [
    InfodisenoComponent,
    InfoprogramaComponent,
    InfoformacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfodisenoComponent,
    InfoprogramaComponent,
    InfoformacionComponent,
  ],

})
export class TableroppalModule { }
