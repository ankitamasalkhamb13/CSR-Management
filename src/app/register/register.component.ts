
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import { EmployeeserviceService } from '../services/employeeservice.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register,',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private employeeService:EmployeeserviceService,private _snackBar: MatSnackBar) { }
  


  public employee={
    role:'',
    first_name:'',
    last_name:'',
    email:'',
    contact_no:'',
    designation:'',
    location:'',
    dob:'',
    password:'',
    confirm_password:'',

  };
  ngOnInit(): void {
  }
  login()
  {
    this.router.navigate(["/login"])
  }
  formSubmit(){
    console.log(this.employee);
    
    if(this.employee.role=='' || this.employee.role==null)
    {
       //this.msg="Please Enter First Name";
      this._snackBar.open("Please Select Your Role",'', {
        duration:4000,
      });
      return;

   }
    if(this.employee.first_name=='' || this.employee.first_name==null)
    {
       //this.msg="Please Enter First Name";
      this._snackBar.open("Please Enter First Name",'', {
        duration:4000,
      });
      return;

   }
   if(this.employee.last_name=='' || this.employee.last_name==null)
   {
   
     this._snackBar.open("Please Enter Last Name",'', {
       duration:4000,
       
     });
     
     return;

  }
  if(this.employee.email=='' || this.employee.email==null)
   {
   
     this._snackBar.open("Please Enter EmailId",'', {
       duration:4000,
       
     });
     
     return;

  }
  if(this.employee.contact_no=='' || this.employee.contact_no==null)
   {
   
     this._snackBar.open("Please Enter Contact Number",'', {
       duration:4000,
     
     });
     
     return;

  }
  if(this.employee.designation=='' || this.employee.designation==null)
   {
   
     this._snackBar.open("Please Enter Designation",'', {
       duration:4000,
      
     });
     
     return;

  }
  if(this.employee.location=='' || this.employee.location==null)
   {
   
     this._snackBar.open("Please Select Location",'', {
       duration:4000,
      
     });
     
     return;

  }

  if(this.employee.dob=='' || this.employee.dob==null)
   {
   
     this._snackBar.open("Please Select Date of Birth",'', {
       duration:4000,
      
     });
     
     return;

  }
  if(this.employee.password=='' || this.employee.password==null)
   {
   
     this._snackBar.open("Please Enter Password",'', {
       duration:4000,
      
     });
     
     return;

  }
  if(this.employee.confirm_password=='' || this.employee.confirm_password==null)
   {
   
     this._snackBar.open("Please Enter Confirm Password",'', {
       duration:4000,
      
     });
     
     return;

  }

  if(this.employee.password!=this.employee.confirm_password)
  {

    this._snackBar.open("Password Miss Match",'', {
      duration:4000,
  });
  return;
}

   this.employeeService.addEmployee(this.employee).subscribe(
     (data)=>{

      console.log(data);
      Swal.fire('Success',"Registration Successful",'success');
      this.router.navigate(["/login"]);
     },
     (error)=>{

      console.log(error);
      Swal.fire("Error","Something went wrong",'error');
   

     }
   )

  }


}
