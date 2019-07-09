import { Component, OnInit, Input, Output } from '@angular/core';
 
@Component({
	selector: 'content-drawer',
	templateUrl: './content-drawer.html',
	styleUrls: ['./content-drawer.css']
})
 
export class ContentDrawerComponent implements OnInit {
	condition:boolean= false;
	
	constructor() {}

	ngOnInit() {
    }

	checkVar() {
        console.log('this goes from the content-drawer.ts ' + this.condition);
    }
}