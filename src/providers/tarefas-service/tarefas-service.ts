import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TarefasServiceProvider {

  tarefas = [
    {codigo: 1, projeto: 1, descricao: 'Tarefa 1', data: new Date(2017, 10, 22), prioridade: 1},
    {codigo: 2, projeto: 1, descricao: 'Tarefa 2', data: new Date(2018, 2, 14), prioridade: 2},
    {codigo: 3, projeto: 2, descricao: 'Tarefa 3', data: new Date(2017, 10, 1), prioridade: 1},
    {codigo: 4, projeto: 3, descricao: 'Tarefa 4', data: new Date(2017, 10, 27), prioridade: 3},
    {codigo: 5, projeto: 4, descricao: 'Tarefa 5', data: new Date(2017, 10, 21), prioridade: 1}
  ];
  ultimoCodigo = 5;    

  getTarefas(): any[] {
    return this.tarefas;
  }

  editTarefa(cod, codProjeto, desc, data, prioridade) {
    for(let i=0; i<this.tarefas.length; i++) {
      if (this.tarefas[i].codigo == cod) {
        this.tarefas[i].projeto = codProjeto;
        this.tarefas[i].descricao = desc;
        this.tarefas[i].data = data;
        this.tarefas[i].prioridade = prioridade;
        break;
      }
    }
  }

  addTarefa(codProjeto, desc, data, prioridade) {
    this.ultimoCodigo++;
    this.tarefas.push({
      codigo: this.ultimoCodigo,
      projeto: codProjeto,
      descricao: desc,
      data: data,
      prioridade: prioridade
    });
  }

  deleteTarefa(cod) {
    for(let i=0; i<this.tarefas.length; i++) {
      if (this.tarefas[i].codigo == cod) {
        this.tarefas.splice(i,1);
        break;
      }
    }
  }

  // constructor(public http: Http) {
  //   console.log('Hello TarefasServiceProvider Provider');
  // }

}
