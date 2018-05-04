import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';
import { ProjetoPage } from '../projeto/projeto';

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage {
  projetos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public projetosService: ProjetosServiceProvider) {
    this.projetos = projetosService.getProjetos();
  }

  touchProjeto(codigo) {
    let cod = parseInt(codigo);
    this.navCtrl.push(ProjetoPage, {codigo: cod, novo: false});
  }

  addProjeto() {
    this.navCtrl.push(ProjetoPage, {codigo: 0, novo: true});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjetosPage');
  }

}
