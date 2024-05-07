import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardComponent } from './Sheard.component';
import { HeaderComponent } from './Header/Header.component';
import { SidebarComponent } from './Sidebar/Sidebar.component';
import { HomeComponent } from './Home/Home.component';
import { FooterComponent } from './Footer/Footer.component';
import { SpinnerComponent } from './Spinner/Spinner.component';
import { CountactUsComponent } from './CountactUs/CountactUs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SheardComponent,HeaderComponent,CountactUsComponent,SidebarComponent,HomeComponent,FooterComponent,SpinnerComponent],
  exports:[HeaderComponent,SidebarComponent,HomeComponent,CountactUsComponent,FooterComponent,SpinnerComponent]
})
export class SheardModule { }
