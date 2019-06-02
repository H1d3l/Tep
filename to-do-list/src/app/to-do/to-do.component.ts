import { Component, OnInit } from '@angular/core';
import { Tarefa } from './to-do';
import {ListaTarefas} from '../mock-tarefas'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  tarefas = ListaTarefas;
  selectedTarefa: Tarefa;

  

  constructor() { }

  ngOnInit() {
  }

  onSelect(tarefa: Tarefa): void {
    this.selectedTarefa = tarefa;
    
  }

}

