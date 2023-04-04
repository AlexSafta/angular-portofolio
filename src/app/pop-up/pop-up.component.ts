import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { DataModel } from '../Models';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopUpComponent>, 
    @Inject(MAT_DIALOG_DATA) public data : DataModel) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
  
  ngOnInit(): void {
  }

}
