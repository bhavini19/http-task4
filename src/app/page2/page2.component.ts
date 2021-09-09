import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  storeApi = [{
    title:'',
    Image:'',
    ThumbnailImage:'',
  }];
  getResponseImage: any;
  //http: any;
  

  constructor(
    private JSONPlaceholder: JSONPlaceholderService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.JSONPlaceholder.getData().subscribe((res: any) => {
      this.getResponseImage =res;

      for(let i=0;i<4;i++)
      {
        if(i<3) this.pushObject();
        this.storeApi[i].title=this.getResponseImage[i]?.title;
        this.storeApi[i].Image=this.getResponseImage[i]?.ImageUrl;
        this.storeApi[i].ThumbnailImage=this.getResponseImage[i]?.ThumbnailUrl;
        console.log(this.storeApi[i].ThumbnailImage);


      }
    });
  }
  pushObject() {
    this.storeApi.push({
      title:'',
      Image:'',
      ThumbnailImage: '',
    });
  }
  next()
  {
     this.router.navigate(['page3']);
  }

}
