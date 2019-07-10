import { Component, OnInit, Input, Output } from '@angular/core';
 
@Component({
	selector: 'testing-area',
	templateUrl: './testing-area.html',
	styleUrls: ['./testing-area.css']
})
 
export class TestingAreaComponent implements OnInit {
	@Input() test: number;
	constructor(){}
	ngOnInit(){
		console.log(this.test);
	}
}