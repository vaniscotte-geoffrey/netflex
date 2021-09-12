import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/material/material.module';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';

const COMPONENTS = [VideoThumbnailComponent];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ],
  imports: [
    MaterialModule
  ]
})
export class VideoModule { }
