import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import {JSONPlaceholderService} from '../services/jsonplaceholder.service'
import { Router } from '@angular/router';
//import { DataService } from '../data.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  //providers: [ JSONPlaceholderService]
})
export class Page1Component implements OnInit {
  inputData: FormGroup;
  File: any;
  url: any;

  apiData={
    title: '',
    Image: '',
    ThumbnailImage: '',
  }

  //posts: any[];


  // selectedFile: File= null ;
  //url: string | ArrayBuffer;
  
  constructor(

    private router: Router,
    private fb: FormBuilder,
    private JSONPlaceholder: JSONPlaceholderService
    
    ) { }
  ngOnInit(): void {
    this.inputData=this.fb.group({
      fieldTitle: [''],
    })
  }


    onImageSelected(event: any){
    // this.selectedFile=<File>event.target.files[0];

      if (!event.target.files[0] || event.target.files[0].length == 0) {
        return;
      }
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.url = reader.result;
          this.JSONPlaceholder.setImageUrl(this.url);
      };
  
    }

    onThumbnailImageSelected(event: any){
      // this.selectedFile=<File>event.target.files[0];
  
        if (!event.target.files[0] || event.target.files[0].length == 0) {
          return;
        }
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
          return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
          this.url = reader.result;
            this.JSONPlaceholder.setThumbnailUrl(this.url);
        };
    
      }
  

  onUpload(){

    this.apiData.title = this.inputData.value?.fieldTitle;
    this.JSONPlaceholder.setTitle(this.apiData.title);
    this.apiData.Image = this.url;
    this.apiData.ThumbnailImage = this.url;
    this.JSONPlaceholder.postData(this.apiData)
   .subscribe((res: any) =>{
     console.log(res);
   })

    this.router.navigate(['page2']);
  

   
  }
  
  // getDataFromAPI(){
  //   this.JSONPlaceholder.getData().subscribe((data: any) =>{
  //     console.log(data);
  //   })
  // }
  

  

  
    

  }




