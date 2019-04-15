import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-autorization',
  templateUrl: './app-modal-autorization.component.html',
  styleUrls: ['./app-modal-autorization.component.sass']
})
export class AppModalAutorizationComponent implements OnInit {
    @Input() modal_open: boolean;
  constructor() { }

  ngOnInit() {
  }
    modal_close(e)
    {
      this.modal_open=!this.modal_open;
    }
}
