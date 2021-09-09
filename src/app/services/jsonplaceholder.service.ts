import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private JSONPlaceholder: HttpClient) { }
  url=" https://jsonplaceholder.typicode.com/photos";
  titleUrl='';
  ImageUrl ="";
  ThumbnailUrl="";
  responseP: any;
  responseG: any;
 
  postData(myFormData:any){
    this.responseP = this.JSONPlaceholder.post(this.url,myFormData);
    return this.responseP;
  }
  getData(){
    this.responseG=this.JSONPlaceholder.get(this.url);
    return this.responseG;
  }
  setImageUrl(url: string)
  {
    this.ImageUrl = url;
  }
  getImageUrl(){
    return this.ImageUrl;
  }
  
  setThumbnailUrl(url: string)
  {
    this.ThumbnailUrl = url;
  }
  getThumbnailUrl(){
    return this.ThumbnailUrl;
  }
  setTitle(title: string)
  {
    this.titleUrl = title;
  }
  getTitle()
  {
    return this.titleUrl;
  }
  
}

