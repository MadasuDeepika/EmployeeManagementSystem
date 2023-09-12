import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './core/guards/is-authenticated.guard';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { isAdminGuard } from './core/guards/is-admin.guard';
import { newUserGuard } from './core/guards/new-user.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./landingpage/landingpage.component').then(
        (e) => e.LandingpageComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((e) => e.LoginComponent),
      canActivate:[newUserGuard],
  },
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'admin' },
      {
        path: 'admin',
        canActivate: [isAuthenticatedGuard, isAdminGuard],
        loadChildren: () =>
          import('./manage-employees/manage-employees.module').then(
            (e) => e.ManageEmployeesModule
          ),
      },
      {
        path: 'user',
        canActivate: [isAuthenticatedGuard],
        loadChildren: () =>
          import('./client/client.module').then((e) => e.ClientModule),
      },
      {
        path: 'holidays',
        canActivate: [isAuthenticatedGuard, isAdminGuard],
        loadChildren: () =>
          import('./manage-holidays/manage-holidays.module').then(
            (e) => e.ManageHolidaysModule
          ),
      },
      {
        path: 'leaves',
        canActivate: [isAuthenticatedGuard, isAdminGuard],
        loadChildren: () =>
          import('./manage-leaves/manage-leaves.module').then(
            (e) => e.ManageLeavesModule
          ),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pagenotfound/pagenotfound.component').then(
            (e) => e.PagenotfoundComponent
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pagenotfound/pagenotfound.component').then(
        (e) => e.PagenotfoundComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
