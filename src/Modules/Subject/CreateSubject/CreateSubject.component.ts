import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-CreateSubject',
  templateUrl: './CreateSubject.component.html',
  styleUrls: ['./CreateSubject.component.css']
})
export class CreateSubjectComponent {

  constructor(private http: HttpClient, private router: Router) { }

  subjectName: string = '';
  posterPreview: string | ArrayBuffer | null = null;
  posterFile: File | null = null;
  bookFile: File | null = null;
  spinner: number = 0;

  onFileSelected(event: any, fileType: string) {
    const file = event.target.files[0];
    if (fileType === 'poster') {
      this.posterFile = file;
      this.previewImage(file);
    } else {
      this.bookFile = file;
    }
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.posterPreview = reader.result;
    };
  }

  onSubmit() {
    this.spinner = 1;

    const formData = new FormData();
    formData.append('Name', this.subjectName);

    if (this.posterFile) {
      formData.append('Poster', this.posterFile, this.posterFile.name);
    }

    if (this.bookFile) {
      formData.append('Book', this.bookFile, this.bookFile.name);
    }

    this.http.post<any>(`${environment.apiUrl}api/Subject/CreateSubject`, formData)
      .subscribe(
        () => {
          this.spinner = 0;
          this.router.navigate(['/Subject']);
        },
        error => {
          this.spinner = 0;
          console.log(error);
          alert("Error: " + error.message);
        }
      );
  }
}
