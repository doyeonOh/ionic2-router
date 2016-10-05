import { Component } from '@angular/core';

@Component({
  selector: 'page-list',
  templateUrl: 'main.html'
})
export class ListPage {

  constructor() {

  }

  onSearch() {
    console.log('search!');
  }

}
