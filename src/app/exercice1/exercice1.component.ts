import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public title: string = "Exercice 1";
  public styleTitle = {
    "font-weight": "bold",
    "color": "red"
  };

  constructor() { }

  ngOnInit(): void {
  }

  titleClick(): void {
    this.styleTitle.color="green";
    this.title = this.title.toUpperCase();
  }
}
