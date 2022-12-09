import { Component, NgModule, } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  searchText: any;
  heroes = [
    { id: 1, name: 'prabu', country: 'india' },
    { id: 2, name: 'ram', country: 'usa' },
    { id: 3, name: 'siddhik', country: 'india' },
    { id: 4, name: 'kannan', country: 'usa' },
    { id: 5, name: 'sathya', country: 'uk' },
    { id: 6, name: 'muthu', country: 'india' },
    { id: 7, name: 'shathik', country: 'uk' },
    { id: 8, name: 'kumar', country: 'uk' },
    { id: 9, name: 'kumar', country: 'india' },
    { id: 10, name: 'kumar', country: 'usa' }


  ];
  result = this.heroes
  constructor() { }
  test(val) {
    console.log(val);
    var  i=0;
    console.log(i);
    if (val.target.value) {
      this.result = this.heroes.filter(item  => {
        console.log("sathya"+i);
        if (item.id == val.target.value) {
          console.log(item.id);
         // searchVal = item;
          return item;
        } 
        if (item.name == val.target.value) {
          console.log(item.name);
         // searchVal = item;
          return item;
        } 
        if (item.country == val.target.value) {
          console.log(item.country);
        //  searchVal = item;
          return item;
        }
        return item;
      })
      console.log(this.result);
    }

    else {
      this.result = this.heroes
    }


  }
}
