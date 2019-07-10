import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
	selector: 'popup-area',
	templateUrl: './popup-area.html',
	styleUrls: ['./popup-area.css']
})
 
export class PopupAreaComponent implements OnInit {

	@Output() valueChange = new EventEmitter();
	counter = 0;
	
	constructor() {}

    ngOnInit() {
	}


	valueChanged() { // You can give any function name
		this.counter = this.counter + 1;
		console.log(this.counter);
        this.valueChange.emit(this.counter);
    }
}