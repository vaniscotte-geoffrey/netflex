import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { CoreModule } from '../core/core.module';

const MODULES = [UserModule, VideoModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MODULES,
  ],
  exports: [MODULES]
})
export class SharedModule { }
