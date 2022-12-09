import { Component, NgModule, } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  searchText: any;
  heroes = [
    { id: 1, name: 'prabu', country: 'India' },
    { id: 2, name: 'ram', country: 'USA' },
    { id: 3, name: 'Siddhik', country: 'India' },
    { id: 4, name: 'kannan', country: 'India' },
    { id: 5, name: 'Sathya', country: 'UK' },
    { id: 6, name: 'Muthu', country: 'India' },
    { id: 7, name: 'Shathik', country: 'India' },
    { id: 8, name: 'Kumar', country: 'India' }

  ];
  result = this.heroes
  constructor() { }
  test(val) {
    console.log(val);
    var searchVal;

    if (val.target.value) {
      this.result = this.heroes.filter(item => {
        if (item.id == val.target.value) {
          searchVal = item;
          return searchVal;
        } if (item.name == val.target.value) {
          searchVal = item;
          return searchVal;
        } if (item.country == val.target.value) {
          searchVal = item;
          return searchVal;
        }

      })
      console.log(this.result);
    }

    else {
      this.result = this.heroes
    }


  }
}
