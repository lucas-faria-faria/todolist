import { Component, Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TarefaPage } from '../tarefa/tarefa'
import { TarefasServiceProvider } from '../../providers/tarefas-service/tarefas-service';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';

@IonicPage()
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {

  tarefas: any[];
  projetos: any[];
  filtroTarefas = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,  public tarefasService: TarefasServiceProvider, public projetosService: ProjetosServiceProvider) {
    this.projetos = projetosService.getProjetos();
    this.tarefas = tarefasService.getTarefas();
  }

  nomeProjeto(cod): string {
    for(let i=0; i<this.projetos.length; i++)
      if (this.projetos[i].codigo == cod)
        return this.projetos[i].nome;
    return "Projeto não encontrado";
  }

  touchTarefa(codigo) {
    let cod = parseInt(codigo);
    this.navCtrl.push(TarefaPage, {codigo: cod, novo: false});
  }

  addTarefa() {
    this.navCtrl.push(TarefaPage, {codigo: 0, novo: true});
  }

  clearFiltros() {
    this.filtroTarefas = {};
    this.menuCtrl.close();
  }

  filterProjeto(cod) {
    this.filtroTarefas = { projeto: cod }
    this.menuCtrl.close();
  }

  filterDias(numDias) {
    this.filtroTarefas = { dias: numDias };
    this.menuCtrl.close();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarefasPage');
  }

}

@Pipe({
  name: 'filtro'
})
 export class Filtro implements PipeTransform {
  transform(itens:any[],filtro:any):any {
    itens.sort((a,b) => a.data - b.data);
    if (filtro.projeto >= 0) {
      return itens.filter(item => item.projeto == filtro.projeto);
    } else if (filtro.dias >= 0) {
      let d = new Date ((new Date()).getTime() + filtro.dias*24*60*60*1000);
      return itens.filter(item => item.data <= d);
    } else {
      return itens;
    }
  }
 }