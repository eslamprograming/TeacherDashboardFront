import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-DegreeSubject',
  templateUrl: './DegreeSubject.component.html',
  styleUrls: ['./DegreeSubject.component.css']
})
export class DegreeSubjectComponent implements OnInit {
  spinner=0;
Delete(arg0: any) {
  if (confirm("Are you sure you want to delete this Degree?")) {
    this.spinner = 1;
  this.http.delete<any>(`${environment.apiUrl}api/Degree/DeleteDegree?DegreeId=${arg0}`).subscribe(
    res => {
      location.reload();
    },
    error => {
      this.spinner = 0;
      alert("Error occurred while deleting the subject.");
    }

  )}
}
Edit(arg0: any) {
throw new Error('Method not implemented.');
}

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.AllSubject();
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
  Test:any;
  AllTest(subjectId:number){
    this.http.get<any>(`${environment.apiUrl}api/Test/GetAllTestInSubject?SubjectId=${subjectId}`).subscribe(
      res=>{
        this.Test=res;
        console.log(res);
      },
      error=>{
        alert(error);
      }
    )
  }
  degrees:any;
  AllDegree(TestId:number){
    this.http.get<any>(`${environment.apiUrl}api/Degree/GetAllDegreeinTest?TestId=${TestId}`).
    subscribe(
      res=>{
        console.log(res);
        this.degrees=res.values;
      },
      error=>{
        alert(error);
      }
    )
  }

}
