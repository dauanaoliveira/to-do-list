import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';
import { TarefasPendentesComponent } from './tarefas-pendentes/tarefas-pendentes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasComponent } from './tarefas.component';

const routes: Routes = [
  {
    path: '',
    component: TarefasComponent,
    children: [
      {
        path: '',
        component: TarefasPendentesComponent
      },
      {
        path: 'novatarefa',
        component: NovaTarefaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
