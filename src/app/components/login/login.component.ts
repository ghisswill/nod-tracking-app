import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService, Credentials } from '../../shared/services/auth/auth.service';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  private loginSubscription: Subscription | null = null;
  invalidCredentials: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) { }


  ngOnInit() {

    this.form = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.loginSubscription = this.authService.login(this.form.value as Credentials)
    .subscribe({
      next: (res: User) => {
        if(res.id !== undefined){
          this.router.navigate(['/dashboard']);
        } else {
          this.invalidCredentials = true;
        }
      },
      error: error => {
        this.invalidCredentials = true;
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  ngOnDestroy() {
    this.loginSubscription?.unsubscribe();
  }
}