import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) { }


  public addEmployee(user:any)
  {
      return  this.http.post(`${baseurl}/empreg/`,user);
  }

  
}
