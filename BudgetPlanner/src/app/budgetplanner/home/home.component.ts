import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router: any;
  constructor(private sidebar: SidebarComponent) { }
  navigate(){
    this.router.navigate(['/home']);
  }
  toggleSidebar() {
    this.sidebar.toggleSidebar();
  }
}
