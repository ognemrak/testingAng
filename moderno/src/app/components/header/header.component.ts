import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword: string = 'name';
  searchData;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log(1);
    console.log(this.searchData);
    this.http.get('assets/search-data.json').subscribe((data) => this.searchData = data);
    this.http.get('assets/search-data.json').subscribe((data) => console.log(data));
    console.log(this.searchData, ' - Data that we received from the HTTP request');
  }
}

