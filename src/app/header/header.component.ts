import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavActive: boolean = false;
  darkModeAction: boolean = false;

  constructor(private renderer: Renderer2) {}

  onButtonClick(){
    this.isNavActive = !this.isNavActive;
  }

  themeModeChange() {
    const body = document.body;
    if (body.classList.contains('darkThemeAct')) {
      this.renderer.removeClass(body, 'darkThemeAct');
    } else {
      this.renderer.addClass(body, 'darkThemeAct');
    }
    this.darkModeAction = !this.darkModeAction;

    console.log('Theme toggled:', body.classList);
  }
}
