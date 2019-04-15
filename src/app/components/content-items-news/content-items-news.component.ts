import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-content-items-news',
  templateUrl: './content-items-news.component.html',
  styleUrls: ['./content-items-news.component.sass']
})
export class ContentItemsNewsComponent implements OnInit {
    @Input()Header_news:string;
    @Input()Description_news:string;
  constructor() {
    this.Header_news = "Выбор для юго-востока. Пойдут ли Вилкул и Мураев по пути Андрея Садового";
      this.Description_news = "Розенко: Средняя зарплата в Украине может составить 12 тыс. гривен";
  }
  ngOnInit() {
  }

}
