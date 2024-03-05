import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-test',
  standalone: true,
  imports: [],
  templateUrl: './event-test.component.html',
  styleUrl: './event-test.component.css'
})
export class EventTestComponent implements OnInit {
  countClicks: number=0;
  constructor() { }

  ngOnInit() {
    
  }

  addClick(){
    this.countClicks++;
  }

  removeClick(){
    this.countClicks--;
  }

}
