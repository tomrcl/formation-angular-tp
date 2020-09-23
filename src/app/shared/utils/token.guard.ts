import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from './../services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}
  
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.storageService.get({key: 'token'}).then(res => {
      if (res === 'Mon token') {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
  }
}
  