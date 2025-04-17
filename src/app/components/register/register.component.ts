import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../shared/services/user/user.service';
import { User } from '../../shared/models/user.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

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
  submitLabel!: string;
  user?: User;
  users?: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private ref: DynamicDialogRef,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    const userEdited = this.dialogService.getInstance(this.ref).config.data.user != null ? this.dialogService.getInstance(this.ref).config.data.user : null;
    this.chooseFormCreateOrEdit(userEdited);

    }
  chooseFormCreateOrEdit(userEdited: User) {
    if (userEdited != null) {
      this.title = "Edit User's profile";
      this.submitLabel = "Edit User";
      this.formCreate = this.fb.group({
        lastName: userEdited?.lastName,
        firstName: userEdited?.firstName,
        username: userEdited?.username,
        password: userEdited?.password,
        email: userEdited?.email,
        phone: userEdited?.phone,
      });
    } else {
      this.submitLabel = "Create Account";
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
