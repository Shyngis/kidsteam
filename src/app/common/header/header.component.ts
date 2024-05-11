import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router:Router){}

  isLoginPage(){
    return this.router.url ==="/signin"
  }

  isRegisterPage() {
    return this.router.url === '/registration';
  }
}
