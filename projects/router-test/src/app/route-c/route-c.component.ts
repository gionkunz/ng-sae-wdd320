import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-c',
  templateUrl: './route-c.component.html',
  styleUrls: ['./route-c.component.css']
})
export class RouteCComponent implements OnInit {
  id?: string;

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
  }

}
