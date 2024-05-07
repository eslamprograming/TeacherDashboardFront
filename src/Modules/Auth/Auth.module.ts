import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Auth.component';
import { LoginTeacherComponent } from './LoginTeacher/LoginTeacher.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { SheardModule } from "../Sheard/Sheard.module";

@NgModule({
    declarations: [AuthComponent, LoginTeacherComponent],
    exports: [LoginTeacherComponent],
    imports: [
        CommonModule, FormsModule, HttpClientModule,
        SheardModule
    ]
})
export class AuthModule { }
