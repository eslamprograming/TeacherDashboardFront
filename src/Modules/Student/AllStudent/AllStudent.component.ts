import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/ViewModel/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-AllStudent',
  templateUrl: './AllStudent.component.html',
  styleUrls: ['./AllStudent.component.css']
})
export class AllStudentComponent implements OnInit {

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
    if (confirm("Are you sure you want to Remove student this subject?")) {
      this.spinner = 1;
    this.http.delete<any>(`${environment.apiUrl}api/StudentSubject/RemoveStudentFromSubject?Id=${arg0}`).subscribe(
      res => {
        location.reload();
      },
      error => {
        this.spinner = 0;
        alert("Error occurred while deleting the subject.");
      }

    )}
  }
  subject:any;
  AllSubject(){
    this.http.get<any>(`${environment.apiUrl}api/Subject/AllSubject`).subscribe(
      res=>{
        this.subject=res;
        console.log(res);
      },
      error=>{
        alert(error);
      }
    )
  }
  
    constructor(private http:HttpClient,private router:Router) { }
    spinner=1;
    Response:Response=new Response();
    
    ngOnInit() {
      this.spinner=0;
      this.AllSubject();
    }
  
    AllStudent(SubjectId:any){
      this.http.get<any>(`${environment.apiUrl}api/StudentSubject/GetAllStudentINSubject?SubjectId=${SubjectId}`).subscribe(res=>
        {
          this.Response=res;
          console.log(res);
        },
        error=>{alert("error")});
    }
}
