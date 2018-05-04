import { Component } from '@angular/core';

import { ProjetosPage } from '../projetos/projetos';
import { TarefasPage } from '../tarefas/tarefas';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TarefasPage;
  tab3Root = ProjetosPage; 
  
  constructor() {

  }
}
