import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/ViewModel/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-AllTest',
  templateUrl: './AllTest.component.html',
  styleUrls: ['./AllTest.component.css']
})
export class AllTestComponent implements OnInit {


  spinner = 0;
  Response: Response=new Response;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.AllTest();
  }

  AllTest() {
    var subjeceId=localStorage.getItem("subjectId");
    this.spinner = 1;

    this.http.get<any>(`${environment.apiUrl}api/Test/GetAllTestInSubject?SubjectId=${subjeceId}`).subscribe(
      res => {
        this.spinner = 0;
        this.Response = res;
        console.log(res);
      },
      error => {
        this.spinner = 0;
        alert("Error occurred while fetching subjects.");
      }
    );
  }

  Delete(id: any) {
    if (confirm("Are you sure you want to delete this subject?")) {
      this.spinner = 1;
      this.http.delete<any>(`${environment.apiUrl}api/Test/DeleteTest?testId=${id}`).subscribe(
        res => {
          location.reload();
        },
        error => {
          this.spinner = 0;
          alert("Error occurred while deleting the subject.");
        }
      );
    }
  }

  QuestionTest(arg0: any) {
    localStorage.setItem("TestId",arg0);
    this.router.navigate(['/MainQuestionTest']);
  }

  Edit(test: any) {
    this.spinner = 1;
    localStorage.setItem("Test", JSON.stringify(test));
    this.router.navigate(['/EditTest']);
  }
}
