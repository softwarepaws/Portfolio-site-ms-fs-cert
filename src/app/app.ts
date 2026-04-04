import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./nav-bar/nav-bar";
import { Footer } from "./footer/footer";
import { Adsense } from "./adsense/adsense";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer, Adsense],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio-site-ms-fs-cert');
}
