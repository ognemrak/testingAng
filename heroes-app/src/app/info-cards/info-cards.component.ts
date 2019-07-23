import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements OnInit {
  user: User;
 
  constructor(private http: HttpClient){}
    
  ngOnInit(){
      this.http.get('../../../fake.json').subscribe((data:User) => this.user=data);
      console.log(this.user);
  }
}
