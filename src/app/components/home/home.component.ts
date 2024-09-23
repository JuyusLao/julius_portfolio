import { Component, AfterViewInit  } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const typedTextElement = document.querySelector('.typed-text');
    const typedTextOutput = document.querySelector('.typed-text-output');

    if (typedTextElement && typedTextOutput) {
      const typedStrings = typedTextElement.textContent || '';
      const typed = new Typed('.typed-text-output', {
        strings: typedStrings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        loop: true
      });
    }
  }
}