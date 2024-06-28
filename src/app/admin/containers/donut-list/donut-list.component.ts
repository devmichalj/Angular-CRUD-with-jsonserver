import { Component, OnInit } from '@angular/core';

import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrl: './donut-list.component.css',
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    // this.donuts = this.donutService.read();
    this.donutService
      .readObs()
      .subscribe((donuts: Donut[]) => (this.donuts = donuts));
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}
