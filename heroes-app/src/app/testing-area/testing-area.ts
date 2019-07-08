import { Component, OnInit } from '@angular/core';
 
@Component({
	selector: 'testing-area',
	templateUrl: './testing-area.html',
	styleUrls: ['./testing-area.css']
})
 
export class TestingAreaComponent implements OnInit {
	name = 'Tom';
	age = 25;
	count: number=0;
	booleanValue: false;
    
	constructor() { }

	ngOnInit() {
	}

	increase() : void {
		this.count++;
		console.log(this.count);
	}
	
	changeBoolean() {
		this.booleanValue = !this.booleanValue;
		console.log(this.booleanValue);
	}

}