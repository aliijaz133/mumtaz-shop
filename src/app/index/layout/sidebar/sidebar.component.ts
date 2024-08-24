import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Router,
  NavigationEnd,
  RouterOutlet,
} from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { filter } from 'rxjs';

interface Link {
  routerLink: string;
  icon: string;
  label: string;
  whiteImgPath: string;
  grayImgPath: string;
  imgPath: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, HomeComponent],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setImgPaths();
      });
    this.setImgPaths();
  }

  links: Link[] = [
    {
      routerLink: '/home',
      icon: 'grid_view',
      label: 'Dashboard',
      whiteImgPath:
        '../../../../assets/images/sidebar-icons/dashboard-white.png',
      grayImgPath: '../../../../assets/images/sidebar-icons/dashboard-gray.png',
      imgPath: '',
    },
    {
      routerLink: '/order-management',
      icon: 'receipt_long',
      label: 'Order Management',
      whiteImgPath:
        '../../../../assets/images/sidebar-icons/order-management-white.png',
      grayImgPath:
        '../../../../assets/images/sidebar-icons/order-management-gray.png',
      imgPath: '',
    },
    {
      routerLink: '/service-management',
      icon: 'manage_accounts',
      label: 'Service Management',
      whiteImgPath:
        '../../../../assets/images/sidebar-icons/service-management-white.png',
      grayImgPath:
        '../../../../assets/images/sidebar-icons/service-management-gray.png',
      imgPath: '',
    },
    {
      routerLink: '/finance-management',
      icon: 'monetization_on',
      label: 'Finance Management',
      whiteImgPath:
        '../../../../assets/images/sidebar-icons/finance-management-white.png',
      grayImgPath:
        '../../../../assets/images/sidebar-icons/finance-management-gray.png',
      imgPath: '',
    },
    {
      routerLink: '/user-management',
      icon: 'supervisor_account',
      label: 'User Management',
      whiteImgPath:
        '../../../../assets/images/sidebar-icons/user-management-white.png',
      grayImgPath:
        '../../../../assets/images/sidebar-icons/user-management-gray.png',
      imgPath: '',
    },
    {
      routerLink: '/reports',
      icon: 'clinical_notes',
      label: 'Reports',
      whiteImgPath: '../../../../assets/images/sidebar-icons/reports-white.png',
      grayImgPath: '../../../../assets/images/sidebar-icons/reports-gray.png',
      imgPath: '',
    },
    {
      routerLink: '/profile',
      icon: 'account_circle',
      label: 'Profile',
      whiteImgPath: '../../../../assets/images/sidebar-icons/profile-white.png',
      grayImgPath: '../../../../assets/images/sidebar-icons/profile-gray.png',
      imgPath: '',
    },
  ];

  setImgPaths(): void {
    const currentRoute = this.router.url.split('?')[0];
    this.links.forEach((link) => {
      link.imgPath =
        currentRoute === link.routerLink ? link.whiteImgPath : link.grayImgPath;
    });
  }

  getImgPath(link: Link): string {
    return link.imgPath;
  }
}
