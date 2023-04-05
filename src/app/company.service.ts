import { Injectable } from '@angular/core';
import { Company } from './company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companies: Company[] = [];

  constructor() { }

  getCompanies() {
    return this.companies;
  }

  addCompany(company: Company) {
    this.companies.push(company);
  }

  deleteCompany(id: number) {
    this.companies = this.companies.filter(company => company.id !== id);
  }

  editCompany(id: number, updatedCompany: Company) {
    const index = this.companies.findIndex(company => company.id === id);
    this.companies[index] = updatedCompany;
  }
  
  hideCompany(id: number) {
    throw new Error('Method not implemented.');
  }
}
