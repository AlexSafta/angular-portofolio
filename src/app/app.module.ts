import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'; // import MatInputModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyService } from './company.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopUpComponent,
    CompaniesComponent,
    CompanyDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule, // adaugă MatInputModule în imports
    BrowserAnimationsModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
