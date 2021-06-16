import { NovaTarefaService } from './nova-tarefa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovaTarefa } from './nova-tarefa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent implements OnInit {

  novaTarefaForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private novaTarefaService: NovaTarefaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.novaTarefaForm = this.formBuilder.group({
      task: [''],
      description: [''],
      status: [''],
      user: [''],
      email: [''],
    })
  }

  cadastrar() {
    const novaTarefa = this.novaTarefaForm.getRawValue() as NovaTarefa;
    novaTarefa.status = "pendente";

    this.novaTarefaService.cadastraNovaTarefa(novaTarefa).subscribe(() => {
      this.router.navigate([''])
    },(error) => {
      console.log('errr')
    }
    )
  }
}
