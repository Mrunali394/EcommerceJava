import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // TODO: Replace with actual admin role check
    const isAdmin = localStorage.getItem('userRole') === 'admin';
    
    if (!isAdmin) {
      this.router.navigate(['/']);
      return false;
    }
    
    return true;
  }
} 