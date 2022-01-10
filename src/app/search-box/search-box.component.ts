import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() cityFrom!: string;
  @Input() cityTo!: string;
  @Input() date: Date = new Date();
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  
  }

  onClickSearch() {
    this.router.navigate(
      ['search'], {
        queryParams: {
          from: this.cityFrom, to: this.cityTo, date: this.date.toDateString()
        }
    }
    );
  }

}
