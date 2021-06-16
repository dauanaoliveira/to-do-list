import { TestBed } from '@angular/core/testing';

import { NovaTarefaService } from './nova-tarefa/nova-tarefa.service';

describe('NovaTarefaService', () => {
  let service: NovaTarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovaTarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
