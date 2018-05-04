import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';

@IonicPage()
@Component({
  selector: 'page-projeto',
  templateUrl: 'projeto.html',
})
export class ProjetoPage {

  codProjeto: number;
  nomeProjeto: string = "";
  novo: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public projetoService: ProjetosServiceProvider) {
    this.codProjeto = navParams.get('codigo');
    this.novo = navParams.get('novo');
    let projetos = projetoService.getProjetos();

    if (!this.novo) {
      for (let i = 0; i < projetos.length; i++) {
        if (projetos[i].codigo == this.codProjeto ) {
          this.nomeProjeto = projetos[i].nome;
          break;
        }
      }
    }
  }

  add() {
    this.projetoService.addProjeto(this.nomeProjeto);
    this.navCtrl.pop();
  }

  edit() {
    this.projetoService.editProjeto(this.codProjeto, this.nomeProjeto);
    this.navCtrl.pop();
  }

  delete() {
    this.projetoService.deleteProjeto(this.codProjeto);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjetoPage');
  }

}
