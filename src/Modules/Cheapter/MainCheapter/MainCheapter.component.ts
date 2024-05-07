import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/ViewModel/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-MainCheapter',
  templateUrl: './MainCheapter.component.html',
  styleUrls: ['./MainCheapter.component.css']
})
export class MainCheapterComponent implements OnInit {
Question(arg0: any) {
  localStorage.setItem("CheapterId",arg0);
  this.router.navigate(['/MainQuestion']);
}
Edit(_t15: any) {
  localStorage.setItem("Cheapter",JSON.stringify(_t15));
  this.router.navigate(['/EditCheapter']);
}
Video(arg0: any) {
  localStorage.setItem("CheapterId",arg0);
  this.router.navigate(['/MainVideo']);
}
Delete(arg0: any) {
  if (confirm("Are you sure you want to delete this subject?")) {
    this.spinner = 1;
  this.http.delete<any>(`${environment.apiUrl}api/Cheapter/DeleteCheapter?CheapterId=${arg0}`).subscribe(
    res => {
      location.reload();
    },
    error => {
      this.spinner = 0;
      alert("Error occurred while deleting the subject.");
    }
  )
}
}

  constructor(private http:HttpClient,private router:Router) { }
  spinner=1;
  Response:Response=new Response();
  
  ngOnInit() {
    this.AllCheapter();
    this.spinner=0;
  }

  AllCheapter(){
    
    var subjeceId=localStorage.getItem("subjectId");
    this.http.get<any>(`${environment.apiUrl}api/Cheapter/GetAllCheapter?subjectId=${subjeceId}`).subscribe(res=>
      {
        this.Response=res;
        console.log(res);
      },
      error=>{alert("error")});
  }
}
