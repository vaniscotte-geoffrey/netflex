import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NavModule } from './nav/nav.module';

const MODULES = [MaterialModule, NavModule];

@NgModule({
  declarations: [],
  imports: [
    MODULES
  ],
  exports: [MODULES]
})
export class CoreModule { }
