import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ModalServiceService } from '../modal-service.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PopUpComponent implements OnInit {
  project: Project = { title: '', description: '', image: '', url: '' };

  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    private modalService: ModalServiceService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.modalService.addProject(this.project).subscribe(() => {
      this.dialogRef.close();
    });
  }
}

