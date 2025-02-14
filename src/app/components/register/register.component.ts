import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  formCreate!: FormGroup;
  invalidUserToCreate: boolean = false;
  createUserSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.formCreate = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onCreatUser() {
    if (this.formCreate.valid) {
      console.log(this.formCreate.value);
      
    }
    
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
