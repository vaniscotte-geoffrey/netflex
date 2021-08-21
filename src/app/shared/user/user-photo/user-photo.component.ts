import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserModule } from '../user.module';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.scss']
})
export class UserPhotoComponent implements OnInit {

  public readonly PHOTO_PLACEHOLDER: string = 'https://occ-0-769-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41';
  @Input()
  public user?: User;

  constructor() { }

  ngOnInit(): void {
  }

}
