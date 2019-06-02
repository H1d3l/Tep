import { Injectable } from '@angular/core';
import {Tarefa} from './to-do/to-do';
import {ListaTarefas} from './mock-tarefas'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private messageService: MessageService) { }
  
  gettarefas() : Observable<Tarefa[]> {
    this.messageService.add('TarefaService: fetched tarefas');
    return of (ListaTarefas);
  }
  gettarefa(id: number): Observable<Tarefa> {
    this.messageService.add(`TarefaService: fetched tarefa id=${id}`);
    return of(ListaTarefas.find(tarefa => tarefa.id === id));
  }
  
} 
