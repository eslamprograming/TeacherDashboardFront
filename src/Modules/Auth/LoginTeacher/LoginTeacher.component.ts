import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthVM } from 'src/ViewModel/AuthVM';
import { LoginVM } from 'src/ViewModel/User/LoginVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-LoginTeacher',
  templateUrl: './LoginTeacher.component.html',
  styleUrls: ['./LoginTeacher.component.css']
})
export class LoginTeacherComponent implements OnInit {

   constructor(private http:HttpClient,private router:Router) { }

   spinner=0;
  model:LoginVM=new LoginVM();
  Response:AuthVM=new AuthVM();

  ngOnInit() {
  }
  Login(){
    this.spinner=1;
      this.http.post<any>(`${environment.apiUrl}api/Auth/Login`,this.model).subscribe(res=>{
      this.Response=res;
      this.spinner=0;
      console.log(res);
      localStorage.setItem("token",res.token);
      this.router.navigate(['']);
    },
    error=>{
      this.spinner=0;
      alert("error");
    })
    
  }
  


}
