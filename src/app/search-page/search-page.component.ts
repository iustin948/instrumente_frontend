import { Component, OnInit } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';



@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
onPageChange1($event: PaginatorState) {
throw new Error('Method not implemented.');
}
onPageChange2($event: PaginatorState) {
throw new Error('Method not implemented.');
}
onPageChange3($event: PaginatorState) {
throw new Error('Method not implemented.');
}
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];
  rangeValues: number[] = [0, 100]; 
options: any[]|undefined;
first2: number;
first1: number;
rows1: number;
rows2: any;
rows3: any;
first3: any;
totalRecords: number;
  constructor() {
    this.first1 = 0;
    this.rows1 = 10;

    this.first2 = 0;
    this.rows2 = { label: '10', value: 10 }; // Assuming 'rows2' is bound to a dropdown

    this.first3 = 0;
    this.rows3 = 10;

    this.totalRecords = 120;
   }

  ngOnInit() {
  }

}
