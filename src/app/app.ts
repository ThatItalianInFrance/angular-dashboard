import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer.component';
import { HeaderComponent } from './shared/header.component';
import { SidebarComponent } from './shared/sidebar.component';  

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,  FooterComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'test-angular';
}
