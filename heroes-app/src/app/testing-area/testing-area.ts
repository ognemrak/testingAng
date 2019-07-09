import { Component, OnInit, Input } from '@angular/core';
 
@Component({
	selector: 'testing-area',
	templateUrl: './testing-area.html',
	styleUrls: ['./testing-area.css']
})
 
export class TestingAreaComponent implements OnInit {
	booleanValue: false;
	@Input() userName: string;
	@Input() userAge: number;
	@Input() boolean: boolean;
    
	constructor() { }

	ngOnInit() {
	}
	
	changeBoolean() {
		this.booleanValue = !this.booleanValue;
		console.log(this.booleanValue);
		console.log(1);
	}
}