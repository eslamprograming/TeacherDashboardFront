import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestVM } from 'src/ViewModel/testVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-CreateTest',
  templateUrl: './CreateTest.component.html',
  styleUrls: ['./CreateTest.component.css']
})
export class CreateTestComponent implements OnInit {
  model: any ;
  model2: any ;
  spinner: number = 0;



  constructor( private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.model = localStorage.getItem("subjectId");
    this.model2 = this.model ? JSON.parse(this.model) : null;
  }
  posterPreview: string | ArrayBuffer | null = null;
  posterFile: File | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
      this.posterFile = file;
      this.previewImage(file);
    
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.posterPreview = reader.result;
    };
  }
  test:TestVM=new TestVM();
  onSubmit() {
    this.spinner=1;
    const testform=new FormData();
    testform.append("Name",this.test.name);
    testform.append("FullMark",JSON.stringify(this.test.fullMark));
    testform.append("Count",JSON.stringify(this.test.count));
    testform.append("SubjectId",this.model2);
    if (this.posterFile) {
      testform.append('Poster', this.posterFile, this.posterFile.name);
    }
    this.http.post<any>(`${environment.apiUrl}api/Test/CreateTest`,testform).subscribe(
      res=>{
        this.spinner=0;
        console.log(res);
        this.router.navigate(['/MainTest'])
      },
      error=>{
        this.spinner=0;
        alert("error");
        console.log(error);
      }
    )
    
    }

}
