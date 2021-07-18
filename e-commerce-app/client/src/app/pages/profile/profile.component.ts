import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router: Router
    ) { }
  userDetails;
  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.userService.getProfile()
        .subscribe(res => {
          if(res['success']) {
            this.userDetails = res['data']
          }
        })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/'])
  }

}
