import { Component, OnInit } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] | undefined;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies = this.companyService.getCompanies();
  }

  onHide(id: number) {
    this.companyService.hideCompany(id);
    this.getCompanies();
  }

  onDelete(id: number) {
    this.companyService.deleteCompany(id);
    this.getCompanies();
  }

  onEdit: any
}