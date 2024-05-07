import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './Student.component';
import { AllStudentComponent } from './AllStudent/AllStudent.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SheardModule } from '../Sheard/Sheard.module';
import { BlogChatComponent } from './BlogChat/BlogChat.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,HttpClientModule,RouterModule,SheardModule
  ],
  declarations: [StudentComponent,AllStudentComponent,BlogChatComponent],
  exports:[AllStudentComponent,BlogChatComponent]
})
export class StudentModule { }
