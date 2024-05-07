import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
Logout() {
  localStorage.removeItem("token");
  this.router.navigate(['/LoginTeacher']);
}

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
