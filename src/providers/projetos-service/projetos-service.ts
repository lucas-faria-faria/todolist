import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjetosServiceProvider {

  projetos = [
    {codigo: 1, nome: 'Webservice'},
    {codigo: 2, nome: 'Backend'},
    {codigo: 3, nome: 'API'},
    {codigo: 4, nome: 'Frontend'}
  ];
  ultimoCodigo = 4;

  getProjetos() {
    return this.projetos;
  }

  editProjeto(cod: number, nome: string) {
    for (let i=0; i < this.projetos.length; i++) {
      if (this.projetos[i].codigo == cod) {
        this.projetos[i].nome = nome;
        break;
      }
    }
  }

  deleteProjeto(cod: number) {
    for (let i=0; i < this.projetos.length; i++) {
      if (this.projetos[i].codigo == cod) {
        this.projetos.splice(i,1);
        break;
      }
    }
  }

  addProjeto(n:string) {
    this.ultimoCodigo++;
    this.projetos.push({
      codigo: this.ultimoCodigo,
      nome: n
    });
  }

  // constructor(public http: Http) {
  //   console.log('Hello ProjetosServiceProvider Provider');
  // }

}
