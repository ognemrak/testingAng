import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from './user';
import {take, pluck, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';

// `<div *ngIf='result$ | async as user'>
//         <p>{{user.data.color}}</p>
//     </div>`
   
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
   
    user;
    result$: Observable<any>;
 
    constructor(private http: HttpClient){}
      
    ngOnInit(){
        this.result$ = this.getdata().pipe(tap(console.log));
        // this.http.get('https://reqres.in/api/products/3').pipe(
        //     take(1)
        // ).subscribe(resp => this.user = resp);
    }

    getdata() {
        return this.http.get('https://reqres.in/api/products/3');
    }
}