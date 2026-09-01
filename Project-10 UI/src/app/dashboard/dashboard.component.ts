import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isLogin(): boolean {
    const firstName = localStorage.getItem('fname');
    return firstName !== 'null' && firstName !== null;
  }

  isAdmin(): boolean {
    const role = localStorage.getItem('role');
    return role?.trim().toLowerCase() === 'admin';
  }
}
