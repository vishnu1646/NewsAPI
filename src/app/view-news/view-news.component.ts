import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent {
  constructor (private api: ApiService){
    api.fetchnews().subscribe(
      (response) =>{
        this.data =response;
      }
    )
  }
data:any=[]
}
