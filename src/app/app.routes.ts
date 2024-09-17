import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {BadgeComponent} from "./pages/badge/badge.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: HomeComponent,},
  {path: 'badge', component: BadgeComponent,},
  // {path: 'speakers', component: BadgeComponent,},
];
