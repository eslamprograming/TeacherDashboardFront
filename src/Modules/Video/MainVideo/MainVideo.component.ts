import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/ViewModel/Response';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-MainVideo',
  templateUrl: './MainVideo.component.html',
  styleUrls: ['./MainVideo.component.css']
})
export class MainVideoComponent implements OnInit {

  Question(arg0: any) {
  }
  Edit(_t15: any) {
  throw new Error('Method not implemented.');
  }
  Video(arg0: any) {
    alert(arg0);
    localStorage.setItem("CheapterId",JSON.stringify(arg0));
    this.router.navigate(['/MainVideo']);
  
  }
  Delete(arg0: Number) {
    this.http.delete<any>(`${environment.apiUrl}api/Video/DeleteVideo?videoId=${arg0}`).subscribe(res=>{
      location.reload();
    },
    error=>{
      alert("error");
    })
  }
  
    constructor(private http:HttpClient,private router:Router) { }
    spinner=1;
    Response:Response=new Response();
    
    ngOnInit() {
      this.AllCheapter();
      this.spinner=0;
    }
  
    AllCheapter(){
      var VideoId=localStorage.getItem("CheapterId");
      this.http.get<any>(`${environment.apiUrl}api/Video/GetAllVideosInCheapter?CheapterId=${VideoId}`).subscribe(res=>
        {
          this.Response=res;
          console.log(res);
        },
        error=>{alert("error")});
    }

}
