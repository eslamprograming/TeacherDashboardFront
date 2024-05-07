import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-EditSubject',
  templateUrl: './EditSubject.component.html',
  styleUrls: ['./EditSubject.component.css']
})
export class EditSubjectComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }
  
  posterPreview: string | ArrayBuffer | null = null;
  posterFile: File | null = null;
  bookFile: File | null = null;
  fileToUploadposter: File | null = null;
  fileToUploadbook: File | null = null;

  onFileSelectedPoster(event: any) {
    this.fileToUploadposter = event.target.files[0];
    
  }
  onFileSelected(event: any, fileType: string) {
    const file = event.target.files[0];
    if (fileType === 'poster') {
      this.fileToUploadposter = file;
      this.posterFile = file;

      this.previewImage(file);
    } else {
      this.fileToUploadbook = file;
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

  onFileSelectedbook(event: any) {
    this.fileToUploadbook = event.target.files[0];
    
  }
  model:any;
  model2:any;

  ngOnInit() {
    try {
       this.model = localStorage.getItem("Subject");
        this.model2 = JSON.parse(this.model);      
      
    } catch (error) {
      console.error('Error retrieving object from localStorage:', error);
    }
  }
  spinner=0;
  onSubmit(formData: any) {

    this.spinner=1;
    var objToSend = new FormData();
    objToSend.append('Name', formData.Name);
    if (this.fileToUploadposter !== null) {
      objToSend.append('Poster', this.fileToUploadposter,this.fileToUploadposter.name);
    }
    if (this.fileToUploadbook !== null) {
      objToSend.append('Book', this.fileToUploadbook,this.fileToUploadbook.name);
    }
    this.http.patch<any>(`${environment.apiUrl}api/Subject/UpdateSubject?Id=${this.model2.id}`, objToSend)
      .subscribe(res =>{
        this.spinner=0;
          this.router.navigate(['/Subject']);
      },
      error=>{
        this.spinner=0;
        console.log(error);
        alert("error : "+error.Message);

      }
      );
  }

}
