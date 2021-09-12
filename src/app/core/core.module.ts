import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { NavModule } from './nav/nav.module';

const MODULES = [MaterialModule, NavModule];

@NgModule({
  imports: [
    MODULES,
  ],
  exports: [MODULES]
})
export class CoreModule { }
