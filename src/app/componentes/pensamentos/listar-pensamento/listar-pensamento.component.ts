import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo : "Passo informacoes para o componente filho",
      autoria : "Componente Pai",
      modelo : "modelo3"
    },
    {
      conteudo : "Minha propriedade é decorada com @Input()",
      autoria : "Componente Filho",
      modelo : "modelo1"
    },
    {
      conteudo : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up.ampden-Sydney College in Virginia, looked upampden-Sydney College in Virginia, looked upampden-Sydney College in Virginia, looked up",
      autoria : "",
      modelo : "modelo2"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
