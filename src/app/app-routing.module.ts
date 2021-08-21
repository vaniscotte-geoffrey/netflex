import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AuthModule } from './pages/auth/auth.module';
import { PagesModule } from './pages/pages.module';

const ROUTES: Routes = [
  {path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
    AuthModule,
    PagesModule,
    CoreModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
