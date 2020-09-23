import { StorageService } from './../shared/services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private storageService: StorageService, 
    public router: Router, 
    private activatedRoute: ActivatedRoute) { }
    
    ngOnInit(): void {
    }
    
    deconnect() {
      this.storageService.remove({key: 'token'})
      .then(_ => this.router.navigate(['/login'], {relativeTo: this.activatedRoute}));
    }
  }
  