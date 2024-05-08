import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { SheardModule } from "../Sheard/Sheard.module";
import { LoginTeacherComponent } from './LoginTeacher/LoginTeacher.component';

@NgModule({
    declarations: [LoginTeacherComponent],
    imports: [
        CommonModule, FormsModule, HttpClientModule,
        SheardModule
    ],
    exports: [LoginTeacherComponent]
})
export class AuthModule { }
