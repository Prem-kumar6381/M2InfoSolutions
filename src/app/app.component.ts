import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'M2InfoSolutions';
  @ViewChild('homesection') homeSection!: ElementRef;
  @ViewChild('servicesection') serviceSection!: ElementRef;
  @ViewChild('aboutsection') aboutSection!: ElementRef;
  @ViewChild('contactsection') contactSection!: ElementRef;

  
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      AOS.init();
    }
  }
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault(); // Prevent default anchor behavior

    let targetSection: ElementRef | undefined;

    switch (sectionId) {
      case 'homesection':
        targetSection = this.homeSection;
        break;
      case 'servicesection':
        targetSection = this.serviceSection;
        break;
      case 'aboutsection':
        targetSection = this.aboutSection;
        break;
      case 'contactsection':
        targetSection = this.contactSection;
        break;
    }

    if (targetSection) {
      // Scroll to the target section using the browser's window.scroll method
      window.scrollTo({
        top: targetSection.nativeElement.offsetTop,
        behavior: 'smooth'
      });

      // Delay closing the off-canvas to allow scrolling to finish
      setTimeout(() => {
        const offcanvasElement = document.getElementById('offcanvasExample');
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvas) {
          offcanvas.hide();
        }
      }, 500); // Adjust this delay as needed
    }
  }
  
  
}



