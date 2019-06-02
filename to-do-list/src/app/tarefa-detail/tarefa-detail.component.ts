import { Component, OnInit, Input } from '@angular/core';
import {Tarefa} from '../to-do/to-do';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {TarefaService} from '../tarefa.service';

@Component({
  selector: 'app-tarefa-detail',
  templateUrl: './tarefa-detail.component.html',
  styleUrls: ['./tarefa-detail.component.css']
})
export class TarefaDetailComponent implements OnInit {
  //@Input() tarefa : Tarefa;
  tarefa : Tarefa;


  constructor(
    private route: ActivatedRoute,
    private tarefaService: TarefaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.gettarefa ();
  }
  
  gettarefa(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tarefaService.gettarefa(id)
      .subscribe(tarefa => this.tarefa = tarefa);
  }
  goBack(): void {
    this.location.back();
  }
}
