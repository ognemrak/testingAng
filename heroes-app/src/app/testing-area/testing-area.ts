import { Component, OnInit, Input, Output } from '@angular/core';
 
@Component({
	selector: 'testing-area',
	templateUrl: './testing-area.html',
	styleUrls: ['./testing-area.css']
})
 
export class TestingAreaComponent implements OnInit {
	@Input() boolValue: boolean;

	constructor() {}
    ngOnInit() {}
    
    checkVar() {
        console.log('this goes from the testing.ts ' + this.boolValue);
    }
}