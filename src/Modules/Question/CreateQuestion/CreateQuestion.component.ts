import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-CreateQuestion',
  templateUrl: './CreateQuestion.component.html',
  styleUrls: ['./CreateQuestion.component.css']
})
export class CreateQuestionComponent implements OnInit {
  choices: string[] = [];
  spinner = 0;
  model2: any;
  model: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.model = localStorage.getItem("CheapterId");
    this.model2 = JSON.parse(this.model);
  }

  addChoice() {
    this.choices.push('');
  }

  removeChoice(index: number) {
    this.choices.splice(index, 1);
  }

  onSubmit(formData: any) {
    this.spinner = 1;

    // Prepare data to be sent to the server
    const questionData = new FormData();
    
    questionData.append("Quction", formData.question);
    questionData.append("Ansure", formData.answer);

    if (this.choices.length > 0) {
      questionData.append("Choices", JSON.stringify(this.choices));
    }
    
    questionData.append("CheapterId", this.model2);

    // Send data to the server
    this.http.post<any>(`${environment.apiUrl}api/Question/CreateQuestion`, questionData)
      .subscribe(
        res => {
          this.spinner = 0;
          this.router.navigate(['/MainQuestion']);
        },
        error => {
          this.spinner = 0;
          console.log(error);
          alert("Error: " + error.message);
        }
      );
  }
}
