import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementRef: any;
  showPrintButton: boolean = true;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }
  
  title = 'app works!';

  onPrintClick(){
    const dom: HTMLElement = this.elementRef.nativeElement;

    const collapsedElements = dom.querySelectorAll('.collapsed');
    collapsedElements.forEach((element: Element) => {
      element.classList.remove('collapsed');
    })

    const collapseElements = dom.querySelectorAll('.collapse');
    collapseElements.forEach((element: Element) => {
      element.classList.add('show');
    })

    this.showPrintButton = false;
    window.print();
  }
}
