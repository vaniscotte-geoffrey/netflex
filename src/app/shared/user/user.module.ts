import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPhotoComponent } from './user-photo/user-photo.component';

const COMPONENTS = [UserPhotoComponent];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class UserModule { }
