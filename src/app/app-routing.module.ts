import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './guards/is-authenticated.guard';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: ''},
  {
    path: '',
    loadComponent: () =>
      import('./components/landingpage/landingpage.component').then(
        (e) => e.LandingpageComponent
      ), 
  },
  {
    path: 'login',
    loadComponent:()=> import('./components/login/login.component').then(e=>e.LoginComponent),
  },
  {
    path: 'admin',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () =>
      import('./manage-employees/manage-employees.module').then(
        e => e.ManageEmployeesModule
      ),
  },
  {
    path: 'holidays',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () =>import('./manage-holidays/manage-holidays.module').then(
      e=> e.ManageHolidaysModule
    )
  },
  {
    path: 'leaves',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () =>import('./manage-leaves/manage-leaves.module').then(
      e=> e.ManageLeavesModule
    )
  },
  { path: '**', loadComponent:()=> import('./components/pagenotfound/pagenotfound.component').then(e=>e.PagenotfoundComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
