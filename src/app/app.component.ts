import {
  Component,
  ElementRef,
  ViewChild,
  VERSION,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  //@Viewchild used for: Accessing a DOM elemente from a component class
  //Steps:
  //1. Create a template ref element on html
  //2. Create a property of type ElementRef on ts
  //3. Attach the @ViewChild Decorator specifying the template reference variable
  //4. Define the ngAfterViewInit logic  after what I need
  
  name = 'Ingrid';
  userName = 'C';
  customerName = 'Mihai';

  @ViewChild('nameRef') nameElementRef: ElementRef;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
  }
}
