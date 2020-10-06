import { Component, OnInit } from '@angular/core';

type ListItem= Array<string>;

@Component({
  selector: 'app-create-list-item',
  templateUrl: './create-list-item.component.html',
  styleUrls: ['./create-list-item.component.css'],
})
export class CreateListItemComponent implements OnInit {
  item = '';

  list: ListItem = [];

  constructor() { }

  ngOnInit(): void {
  }

  // if used without the arrow function then you must bind in the html
  addNewItem = () => {
    this.list = [this.item, ...this.list];
    this.item = '';
  }
}
