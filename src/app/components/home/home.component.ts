import { Component } from '@angular/core';

export interface Sentence {  
  img: string;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showChildComponent = false;
  
  start() {
    this.showChildComponent = true;
  }


  homeSentences:Sentence[] = [
    {
      "img": '../assets/images/1.jpg',
      "text": "Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial",
    },
    {
      "img": '../assets/images/2.jpg',
      "text": "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas",
    },
    {
      "img": '../assets/images/3.jpg',
      "text": "El héroe decidió atravesar la puerta que le llevaba a casa",
    },
    {
      "img": '../assets/images/4.jpg',
      "text": "Mientras tanto, otras heroes no tuvieron tanta suerte en su elección...",
    }
  ];


}
