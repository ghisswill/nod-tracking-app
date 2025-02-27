import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../shared/services/user/user.service';
import { User } from '../../shared/models/user.model';

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
  title: string = "Create an Account";
  userId!: number;
  user?: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.userId = parseInt(this.route.snapshot.queryParams['id']);
    if (this.userId) {
      this.userService.getuser(this.userId).subscribe({
        next: item => {
          this.user = item;
        }
      })
      this.title = "Edit User's profile";
      this.formCreate = this.fb.group({
        lastName: this.user?.lastName,
        firstName: this.user?.firstName,
        username: this.user?.username,
        password: this.user?.password,
        email: this.user?.email,
        phone: this.user?.phone,
      });
    } else {
      this.formCreate = this.fb.group({
        lastName: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        username: ['', [Validators.required]],
        password: ['', Validators.required, Validators.email],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      });

    }
  }

  onCreatUser() {
    const user = Object.assign(new User(), this.formCreate.value)
    this.userService.create(user).subscribe({
      next: ((res) => {
        this.router.navigate(['users']);
      })
    });
  }
}
