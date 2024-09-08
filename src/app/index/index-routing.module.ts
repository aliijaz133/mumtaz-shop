import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./index.component').then((mod) => mod.IndexComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },

      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((mod) => mod.HomeComponent),
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (mod) => mod.DashboardComponent
          ),
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile/profile.component').then(
            (mod) => mod.ProfileComponent
          ),
      },
      {
        path: 'setting',
        loadComponent: () =>
          import('./setting/setting.component').then(
            (mod) => mod.SettingComponent
          ),
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('./chat-group/chat-group.component').then(
            (mod) => mod.ChatGroupComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
