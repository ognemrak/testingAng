import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements OnInit {
  public testVar: boolean = true;
  // public dataArray = xhr;
  public data: string = 'fake static data';
  public addData: string = 'this is still a fake static data';
  public xhr = new XMLHttpRequest();
  
  constructor() { }

  ngOnInit() {
    xhr.open("GET", "https://reqres.in/api/products/3", true);
    xhr.onload = function(){
        const DATA: string = xhr.responseText;
        console.log(xhr.response);
        console.log(DATA);

    };
    xhr.send();
    console.log(xhr.readyState);
  }
}
