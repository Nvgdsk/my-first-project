import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.sass']
})
export class AppContentComponent implements OnInit {
    @Input() showMePartially: boolean;
    @Input() ContentType: number;

  constructor() { }

  ngOnInit() {
  }

}
