                                                                                                                                           import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  empresaFilho : string = '';

  professores = [
    {id: 1, nome: "Fabrizio", email: "fabrizio@grandeporte.com.br"},
    {id: 2, nome: "Nelson", email: "nelson@grandeporte.com.br"}
  ];
}
