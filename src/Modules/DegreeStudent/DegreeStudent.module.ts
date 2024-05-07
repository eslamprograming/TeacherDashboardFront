import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreeStudentComponent } from './DegreeStudent.component';
import { SheardModule } from '../Sheard/Sheard.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DegreeSubjectComponent } from './DegreeSubject/DegreeSubject.component';

@NgModule({
  imports: [
    CommonModule,SheardModule,HttpClientModule,RouterModule
  ],
  declarations: [DegreeStudentComponent,DegreeSubjectComponent],
  exports:[DegreeSubjectComponent]
})
export class DegreeStudentModule { }
