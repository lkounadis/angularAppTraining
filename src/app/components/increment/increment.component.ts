import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increaseCounter(){
    this.counter++
  }

}
