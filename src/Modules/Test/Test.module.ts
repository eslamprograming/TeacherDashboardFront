import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './Test.component';
import { AllTestComponent } from './AllTest/AllTest.component';
import { CreateTestComponent } from './CreateTest/CreateTest.component';
import { FormsModule } from '@angular/forms';
import { SheardModule } from '../Sheard/Sheard.module';
import { HttpClientModule } from '@angular/common/http';
import { SubjectModule } from '../Subject/Subject.module';
import { EditTestComponent } from './EditTest/EditTest.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpClientModule,
    SheardModule,SubjectModule
  ],
  declarations: [TestComponent,AllTestComponent,CreateTestComponent,EditTestComponent],
  exports:[AllTestComponent,CreateTestComponent,EditTestComponent]
})
export class TestModule { }
