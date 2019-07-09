import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
	selector: 'popup-area',
	templateUrl: './popup-area.html',
	styleUrls: ['./popup-area.css']
})
 
export class PopupAreaComponent implements OnInit {
	@Input() boolValue: boolean;
	
	@Output() private numberGenerated = new EventEmitter<number>();

	public generateNumber() {
		const randomNumber = Math.random();
		this.numberGenerated.emit(randomNumber);
	}

	constructor() {}
    ngOnInit() {}
    
    checkVar() {
        console.log('this goes from the popup.ts ' + this.boolValue);
	}
	
}