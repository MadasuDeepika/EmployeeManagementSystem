import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  name: string ='';
  isAdmin:any;
  private breakpointObserver = inject(BreakpointObserver);
  constructor(private auth: AuthService,private router: Router){
    this.name = this.auth.getUser().name
    this.auth.isAdmin().subscribe(res => this.isAdmin = res);     
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    logout() {
      localStorage.removeItem('token');
      this.auth.isAuthenticated();
      this.router.navigate(['/login']);
    }
}
