import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-ui',
  template: `
    <p>
      material-ui works!,
    </p>
    <p> simple slider e.g</p>
    <mat-slider min="1" max="100" step="40" value="40"></mat-slider>
  `,
  styles: [
  ]
})
export class MaterialUiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
