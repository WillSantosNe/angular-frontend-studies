import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos : Pensamento[] = [];
  // Injetando o serviço no construtor
  constructor(private service : PensamentoService) { }

  // Ciclo de vida do componente que vai rodar ao carregar
  ngOnInit(): void {
    // Uso de subscribe para consumir o Observable retornado do serviço
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}
