import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service'; 

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  title1:string='';
  Image1:string='';
  ThumbnailImage1:string='';
 // http: any;

  constructor( private JSONPlaceholder: JSONPlaceholderService ) { }

  ngOnInit(): void {
    this.title1=this.JSONPlaceholder.getTitle();
    this.Image1=this.JSONPlaceholder.getImageUrl();
    this.ThumbnailImage1=this.JSONPlaceholder.getThumbnailUrl();
    
  }

}
