import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/ViewModel/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-AllTestQuestion',
  templateUrl: './AllTestQuestion.component.html',
  styleUrls: ['./AllTestQuestion.component.css']
})
export class AllTestQuestionComponent implements OnInit {

  Question(arg0: any) {
    localStorage.setItem("CheapterId",arg0);
    this.router.navigate(['/MainVideo']);
  }
  Edit(_t15: any) {
  throw new Error('Method not implemented.');
  }
  Video(arg0: any) {
    localStorage.setItem("CheapterId",arg0);
    this.router.navigate(['/MainVideo']);
  
  }
  Delete(arg0: any) {
    if (confirm("Are you sure you want to delete this subject?")) {
      this.spinner = 1;
    this.http.delete<any>(`${environment.apiUrl}api/QuestionTest/DeleteQuestionTest?QTestId=${arg0}`).subscribe(
      res => {
        location.reload();
      },
      error => {
        this.spinner = 0;
        alert("Error occurred while deleting the subject.");
      }

    )}
  }
  
    constructor(private http:HttpClient,private router:Router) { }
    spinner=1;
    Response:Response=new Response();
    
    ngOnInit() {
      this.AllCheapter();
      this.spinner=0;
    }
  
    AllCheapter(){
      var TestId=localStorage.getItem("TestId");
      this.http.get<any>(`${environment.apiUrl}api/QuestionTest/GetQuestionTest?QTestId=${TestId}`).subscribe(res=>
        {
          this.Response=res;
          console.log(res);
        },
        error=>{alert("error")});
    }

}
