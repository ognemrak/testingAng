import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'Tour of the heroes';
	name:string="Tom";
	age:number = 24;
	condition:boolean = true;

	changeCondition() {
		this.condition = !this.condition;
		console.log(this.condition);
	}
}
