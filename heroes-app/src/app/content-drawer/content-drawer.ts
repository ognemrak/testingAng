import { Component, OnInit, Input, Output } from '@angular/core';
 
@Component({
	selector: 'content-drawer',
	templateUrl: './content-drawer.html',
	styleUrls: ['./content-drawer.css']
})
 
export class ContentDrawerComponent implements OnInit {
	myParentcout = 0;
	
	constructor() {}

	ngOnInit() {
    }
	
	displayCounter(count) {
		this.myParentcout = count;
    }
}