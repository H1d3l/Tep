import { Component, OnInit, Input } from '@angular/core';
import {Tarefa} from '../to-do/to-do';

@Component({
  selector: 'app-tarefa-detail',
  templateUrl: './tarefa-detail.component.html',
  styleUrls: ['./tarefa-detail.component.css']
})
export class TarefaDetailComponent implements OnInit {
  @Input() tarefa : Tarefa;


  constructor() { }

  ngOnInit() {
  }

}
