import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './guards/is-authenticated.guard';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ClientModule } from './client/client.module';
import { isAdminGuard } from './guards/is-admin.guard';

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
  {path: 'dashboard', component: SidenavComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo:'admin'},
    {
      path: 'admin',
      canActivate: [isAuthenticatedGuard,isAdminGuard],
      loadChildren: () =>
        import('./manage-employees/manage-employees.module').then(
          e => e.ManageEmployeesModule
        ),
    },
    {path: 'user', canActivate:[isAuthenticatedGuard], loadChildren: () =>import('./client/client.module').then(
      e=> e.ClientModule
    ) },
    {
      path: 'holidays',
      canActivate: [isAuthenticatedGuard,isAdminGuard],
      loadChildren: () =>import('./manage-holidays/manage-holidays.module').then(
        e=> e.ManageHolidaysModule
      )
    },
    {
      path: 'leaves',
      canActivate: [isAuthenticatedGuard,isAdminGuard],
      loadChildren: () =>import('./manage-leaves/manage-leaves.module').then(
        e=> e.ManageLeavesModule
      )
    }
  ]
}
,
  { path: '**', loadComponent:()=> import('./components/pagenotfound/pagenotfound.component').then(e=>e.PagenotfoundComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
