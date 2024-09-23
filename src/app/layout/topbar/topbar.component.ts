import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  isVisible: boolean = true;

  constructor(private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 200) {
      this.renderer.setStyle(document.querySelector('.navbar'), 'display', 'flex');
      this.renderer.setStyle(document.querySelector('.navbar'), 'opacity', '1');
    } else {
      this.renderer.setStyle(document.querySelector('.navbar'), 'display', 'none');
      this.renderer.setStyle(document.querySelector('.navbar'), 'opacity', '0');
    }
  }

  
}