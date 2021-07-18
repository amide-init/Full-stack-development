import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private router:Router
    ) {
    this.loginForm = this.fb.group({
      'email' : [''],
      'password' : ['']
    })
   }

  ngOnInit(): void {
  }

  login(){
   this.userService.login(this.loginForm.value)
       .subscribe(res => {
        if(res['success']){
          localStorage.setItem('token', res['token'])
          this.router.navigate(['/profile'])
        }
       })
  }

}
