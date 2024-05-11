import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {


   validateForm!: UntypedFormGroup;
  isLoading!: boolean;
  isMobile: boolean = false;
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
    private breakpointObserver: BreakpointObserver
    ) {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  // constructor(private fb: NonNullableFormBuilder) {}
}
