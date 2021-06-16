import { NovaTarefa } from './nova-tarefa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NovaTarefaService {

  constructor(private http:HttpClient) { }

  cadastraNovaTarefa(novaTarefa: NovaTarefa){
    return this.http.post('localhost:3000/tarefas', novaTarefa)
  }

  verificaEmail(email: string){
    return this.http.get(`https://apilayer.net/api/check
    ? access_key = f20f7ae318c34b92ee6a685fac758feb
    & email = ${email}`)
  }

}
