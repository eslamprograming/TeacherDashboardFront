import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-CreateVideo',
  templateUrl: './CreateVideo.component.html',
  styleUrls: ['./CreateVideo.component.css']
})
export class CreateVideoComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }
  
  subjectName: string = '';
  posterPreview: string | ArrayBuffer | null = null;
  fileToUploadVideo: File | null = null;
  spinner: number = 0;

  onFileSelected(event: any) {
    {
    const file = event.target.files[0];
      this.fileToUploadVideo = file;
      this.previewImage(file);
    
    }
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.posterPreview = reader.result;
    };
  }
  

  // 
  // onFileSelectedbook(event: any) {
  //   this.fileToUploadVideo = event.target.files[0];
  // }

  ngOnInit() {
    this.model = localStorage.getItem("CheapterId");

    this.model2 = JSON.parse(this.model);
  }
  model:any;
  model2:string='';
  onSubmit(formData: any) {

    

    this.spinner=1;
    var objToSend = new FormData();
    objToSend.append('Name', formData.Name);
    
    if (this.fileToUploadVideo !== null) {
      objToSend.append('video', this.fileToUploadVideo,this.fileToUploadVideo.name);
    }
    objToSend.append("CheapterId",this.model2);
    this.http.post<any>(`${environment.apiUrl}api/Video/CreateVideo`, objToSend)
      .subscribe(res =>{
        this.spinner=0;
          this.router.navigate(['/MainVideo']);
      },
      error=>{
        this.spinner=0;
        console.log(error);
        alert("error : "+error.Message);
      }
      );
  }

}
