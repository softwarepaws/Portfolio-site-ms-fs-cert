import { Component, inject, OnInit, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { RouterLink, RouterLinkActive } from '@angular/router';

const bPoint600px = '(max-width: 600px)';

@Component({
  selector: 'app-nav-bar',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit {
  isMenuOpen = signal(true);

  private readonly breakpointObserver = inject(BreakpointObserver);

  ngOnInit(): void {
    this.breakpointObserver.observe([bPoint600px]).subscribe(result => {
      const isMobile = result.matches;
      
      if (isMobile) {
        this.isMenuOpen.set(false)
      } else {
        this.isMenuOpen.set(true)
      }
      
      console.log("Is Mobile:", isMobile, "Menu Open:", this.isMenuOpen);
    });
  }

  toggleMenu() {
    this.isMenuOpen.update(current => !current);
  }
   
}
