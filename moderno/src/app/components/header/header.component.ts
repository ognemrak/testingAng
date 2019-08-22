import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword = 'name';
  searchData: {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/assets/search-data.json').subscribe((data) => this.searchData = data);
  }
}

