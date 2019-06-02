import { Component, OnInit } from '@angular/core';
import { Tarefa } from './to-do';
//import {ListaTarefas} from '../mock-tarefas';
import {TarefaService} from '../tarefa.service'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  tarefas : Tarefa[];

  

  constructor(private tarefaService : TarefaService) { }

  ngOnInit() {
    this.getTarefas();
  }
 
  
  
  getTarefas() : void {
    this.tarefaService.getTarefas()
    .subscribe(tarefas => this.tarefas = tarefas);
  }
  

}

