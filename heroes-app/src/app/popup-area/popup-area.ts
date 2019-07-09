import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
	selector: 'popup-area',
	templateUrl: './popup-area.html',
	styleUrls: ['./popup-area.css']
})
 
export class PopupAreaComponent implements OnInit {
	@Input() boolValue: boolean;
	
	@Output() onChanged = new EventEmitter<boolean>();
    change(increased:any) {
        this.onChanged.emit(increased);
		// console.log(increased);
    }

	constructor() {}
    ngOnInit() {}
    
    checkVar() {
        console.log('this goes from the popup.ts ' + this.boolValue);
	}
	
}