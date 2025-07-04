import { Routes } from '@angular/router';
import { UserProfile } from './user-profile';
import { Features } from './features';
import { AppLayoutComponent } from './app-layout.component';
import { DashboardComponent } from './pages/dashboard.component';
import { SettingsComponent } from './pages/settings.component';
import { AngularComponent } from './pages/angular.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
          { path: '', redirectTo: 'angular', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'settings', component: SettingsComponent },
          { path: 'angular', component: AngularComponent },
        ],
      },
];
