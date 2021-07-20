import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit(){
    
    
    Swal.fire('Success',"Event Created Successfully",'success');

   }
  }
