import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasComponent } from './tarefas.component';
import { TarefasPendentesComponent } from './tarefas-pendentes/tarefas-pendentes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';


@NgModule({
  declarations: [
    TarefasComponent,
    TarefasPendentesComponent,
    NovaTarefaComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[TarefasComponent]
})
export class TarefasModule { }
