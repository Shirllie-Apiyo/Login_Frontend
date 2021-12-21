import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.css']
})
export class AddLoginComponent implements OnInit {
  form:FormGroup
  constructor(
    public fb:FormBuilder,
    private http:HttpClient
  ) { 
    this.form = this.fb.group({
      first_name:[''],
      last_name:[''],
      phone:[''],
      email:[''],
      message:[''],
    });
   }
   successmessage:any
   firstnameerror:any
   lastnameerror:any
   phoneerror:any
   emailerror:any
   messageerror:any
    submitForm(){
      this.http.post<any>('http://127.0.0.1:5000/api//add',{
          "first_name":this.form.get("first_name")!.value,
          "last_name":this.form.get("last_name")!.value,
          "phone":this.form.get("phone")!.value,
          "email":this.form.get("email")!.value,
          "message":this.form.get("message")!.value
      }).subscribe({
        next:data =>{
          this.successmessage ="Person Saved Successfully , Thank you"
        }
      })
    }

  ngOnInit(): void {
  }

}
