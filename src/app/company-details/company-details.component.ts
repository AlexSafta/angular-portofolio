import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Company } from '../company.model';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  id = 0; 
  @Input()
  company: Company = new Company;
  @Output() hide = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();
  
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onHide() {
    this.hide.emit(this.company.id);
  }

  onDelete() {
    this.delete.emit(this.company.id);
  }

  onEdit() {
    this.edit.emit(this.company.id);
  }
}
