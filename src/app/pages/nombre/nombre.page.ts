import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.page.html',
  styleUrls: ['./nombre.page.scss'],
})
export class NombrePage implements OnInit {

  title:string|'' = 'Dayana Cruz Ramos';
  public alertButtons = ['OK'];
  constructor() { }

  ngOnInit() {
  }

}
