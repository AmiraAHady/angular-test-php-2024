import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.css'
})
export class SimpleComponent implements OnInit {
  num:number=10;
  constructor() { }

  ngOnInit(): void {
  }

  changeNum(){
    this.num=100;
  }

  changeAfterTime(){
    timer(3000).subscribe(()=>{
      this.num=200
    })
  }
}
