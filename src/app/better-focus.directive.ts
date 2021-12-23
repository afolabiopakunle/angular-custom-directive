import { AfterViewInit, Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[betterFocus]'
})

export class BetterFocusDirective implements AfterViewInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'background-color', 'green')
    })

  }
}
