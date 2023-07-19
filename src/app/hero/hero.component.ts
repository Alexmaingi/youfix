import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeCardComponent } from '../home-card/home-card.component';
import { TagsComponent } from '../tags/tags.component';
import { UsersComponent } from '../users/users.component';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Addquestion } from '../State/Actions/questionAction';
import { Store } from '@ngrx/store';
import { AppState } from '../State/appState';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    HomeCardComponent,
    TagsComponent,
    UsersComponent,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  inputValue!: string;
  isDisabled: boolean = true;
  searchTerm!: string;

  checkInput() {
    this.isDisabled = !this.inputValue;
  }
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  myForm!: FormGroup;
  errorMessage!: null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      tags: ['', [Validators.required]],
    });
  }

  SubmitForm() {
    // console.log(typeof this.id, this.id);

    // if(this.id==='1'){
    // this.propertyService.addProperty(this.form.value).subscribe(
    //   res=>{
    //     console.log(res);

    //   }
    // )

    // console.log(this.myForm.value);
    // this.store.dispatch(
    //   Addquestion({
    //     newQuestion: this.myForm.value,
    //     userId: localStorage.getItem('id') as string,
    //   })
    // );

    let tagsValue: string[] = [''];
    if (this.myForm.get('tags')) {
      tagsValue = this.myForm.get('tags')!.value.split(',');
    }
    this.store.dispatch(
      Addquestion({
        newQuestion: { ...this.myForm.value, tags: tagsValue },
        userId: localStorage.getItem('id') as string,
      })
    );

    this.myForm.reset();
    this.router.navigate(['/home']);
  }

  // }else{
  // this.propertyService.updateProperty(this.id ,this.form.value).subscribe(
  //   res=>{
  //     console.log(res);

  //   }
  // )
  // this.store.dispatch(UpdateProperty({id:this.id,updatedProperty:this.form.value}))
}
