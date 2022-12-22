import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

  currentSentence: number = 0

  @Input() homeSentences: any[]=[];

  prev() {
    if (this.currentSentence == 0) {
      this.currentSentence = this.homeSentences.length -1;
    } else {
      this.currentSentence--;
    }
  }
  
  next() {
    if (this.currentSentence == this.homeSentences.length -1) {
      this.currentSentence = 0;
    } else {
      this.currentSentence++
    }
  }
  
  

}
