import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./nav/nav";
import { Footer } from "./footer/footer";
import { Home } from "./home/home";
import { Blog } from "./blog/blog";
import { Whous } from "./whous/whous";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer, Home, Blog, Whous],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('3adsa');
}
