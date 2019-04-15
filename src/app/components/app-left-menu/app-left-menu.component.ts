import { Component, OnInit, Input } from '@angular/core';
import {ContentItemsNewsComponent} from "../content-items-news/content-items-news.component";

@Component({
  selector: 'app-app-left-menu',
  templateUrl: './app-left-menu.component.html',
  styleUrls: ['./app-left-menu.component.sass']
})

export class AppLeftMenuComponent implements OnInit {
    @Input() showMePartially: boolean= false;
    @Input() current_menu: number;
   



  constructor() {
      this.current_menu=0;

  }

    setcur(i:number){
        this.current_menu =i;

    }
  ngOnInit() {
      console.log(this.showMePartially);
  }

}
