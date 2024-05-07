import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './Subject.component';
import { HomeSubjectComponent } from './HomeSubject/HomeSubject.component';
import { CreateSubjectComponent } from './CreateSubject/CreateSubject.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SheardModule } from "../Sheard/Sheard.module";
import { EditSubjectComponent } from './EditSubject/EditSubject.component';

@NgModule({
    declarations: [SubjectComponent, HomeSubjectComponent, CreateSubjectComponent,EditSubjectComponent],
    exports: [HomeSubjectComponent, CreateSubjectComponent,EditSubjectComponent],
    imports: [
        CommonModule, FormsModule, HttpClientModule,
        SheardModule
    ]
})
export class SubjectModule { }
