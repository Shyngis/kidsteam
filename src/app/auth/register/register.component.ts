import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

   registerForm!: UntypedFormGroup;
  isRegistering!: boolean;
  isMobile!: boolean;

  isWebHeight = {
    'height': '100%',
  }
  isMobileHeight = {
    'height': ''
  }
  constructor(
    private fb: UntypedFormBuilder,
    // private authService: AuthService,
    private router: Router,
    // private msg: MessageService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    // this.isRegistering = true;
    // if (this.registerForm.valid) {
    //   this.register(this.registerForm.value);
    // } else {
    //   Object.values(this.registerForm.controls).forEach(control => {
    //     if (control.invalid) {
    //       control.markAsDirty();
    //       control.updateValueAndValidity({onlySelf: true});
    //     }
    //   });
    //   this.isRegistering = false;
    // }
  }

  // register(credentials: any): void {
  //   console.log(credentials)
  //   this.authService.register(credentials).subscribe((result: LoginResponse) => {
  //     this.isRegistering = false;
  //     if(result) {
  //       this.msg.createMessage('success', 'Успешно зарегистрирован')
  //       this.router.navigate(['/signin'])
  //     }
  //   }, error => {
  //     this.isRegistering = false;
  //     this.msg.createMessage('error', 'Ошибка регистрации')
  //   });
  // }
}
