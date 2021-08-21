import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home/home-page/home-page.component";

const ROUTES: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule {

}
