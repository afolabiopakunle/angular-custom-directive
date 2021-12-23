import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";


@Directive({
  selector: '[basicHighlight]'
}) 
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "blue";
    this.elementRef.nativeElement.style.color = "white";
  }

  @HostListener('mouseenter') mousehover() {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white')
}
}