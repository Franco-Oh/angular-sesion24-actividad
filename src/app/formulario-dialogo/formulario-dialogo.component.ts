import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  sport: string;
  name: string;
}

@Component({
  selector: 'app-formulario-dialogo',
  templateUrl: './formulario-dialogo.component.html',
  styleUrls: ['./formulario-dialogo.component.css']
})
export class FormularioDialogoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormularioDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
