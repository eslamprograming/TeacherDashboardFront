import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-CreateCheapter',
  templateUrl: './CreateCheapter.component.html',
  styleUrls: ['./CreateCheapter.component.css']
})
export class CreateCheapterComponent implements OnInit {
  model: any;
  model2: string | null = null;
  spinner: number = 0;
  fileToUploadposter: File | null = null;
  fileToUploadbook: File | null = null;
  posterPreview: string | ArrayBuffer | null = null;
  posterFile: File | null = null;
  bookFile: File | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.model = localStorage.getItem("subjectId");
    this.model2 = this.model ? JSON.parse(this.model) : null;
  }

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
cheapterName:any;
  onSubmit() {
    if (!this.model2) {
      // Handle the case when SubjectId is not available
      return;
    }

    this.spinner = 1;

    const formData = new FormData();
    formData.append('Name', this.cheapterName);

    if (this.posterFile) {
      formData.append('Poster', this.posterFile, this.posterFile.name);
    }

    if (this.bookFile) {
      formData.append('Note', this.bookFile, this.bookFile.name);
    }

    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');

    this.http.post<any>(`${environment.apiUrl}api/Cheapter/CreateCheapter?SubjectId=${this.model2}`,formData)
      .subscribe(
        (res) => {
          this.spinner = 0;
          this.router.navigate(['/MainCheapter']);
        },
        error => {
          this.spinner = 0;
          console.error(error);
          alert("Error: " + error.message);
        }
      );
  }
}
