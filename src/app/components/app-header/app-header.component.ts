import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.sass']
})
export class AppHeaderComponent implements OnInit {

  @Input() checkLeftMenu: boolean = true;
  @Input() openmodal: boolean = false;
  constructor() {

  }

  ngOnInit() {

  }
    OpenModal(){
        this.openmodal=!this.openmodal;
    }
    LeftMenuClick(){

            console.log(this.checkLeftMenu);
            this.checkLeftMenu=!this.checkLeftMenu;

    }
}
