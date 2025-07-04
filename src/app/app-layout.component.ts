// app/layout/app-layout.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header.component';
import { SidebarComponent } from './shared/sidebar.component';
import { FooterComponent } from './shared/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
  template: `<router-outlet></router-outlet>`
,
})
export class AppLayoutComponent {}