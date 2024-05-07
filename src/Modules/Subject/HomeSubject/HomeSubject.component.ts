import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/ViewModel/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-HomeSubject',
  templateUrl: './HomeSubject.component.html',
  styleUrls: ['./HomeSubject.component.css']
})
export class HomeSubjectComponent implements OnInit {

  spinner = 0;
  Response: Response = new Response();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.AllSubject();
  }

  AllSubject() {
    this.spinner = 1;
    this.http.get<any>(`${environment.apiUrl}api/Subject/AllSubject`).subscribe(
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
      this.http.delete<any>(`${environment.apiUrl}api/Subject/DeleteSubject?Id=${id}`).subscribe(
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

  Cheapter(id: any) {
    localStorage.setItem("subjectId", JSON.stringify(id));
    this.router.navigate(['/MainCheapter']);
  }

  Edit(subject: any) {
    this.spinner = 1;
    localStorage.setItem("Subject", JSON.stringify(subject));
    this.router.navigate(['/EditSubject']);
  }
}
