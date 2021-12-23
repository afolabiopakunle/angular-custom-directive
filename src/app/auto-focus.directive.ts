import { AfterContentInit, Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[AutoFocusBlinker]'
})

export class AutoFocusDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    setTimeout(()=> {
      this.elementRef.nativeElement.focus();
    }, 500)
  }
}