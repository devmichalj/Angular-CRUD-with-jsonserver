import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-card',
  templateUrl: './donut-card.component.html',
  styleUrl: './donut-card.component.css',
})
export class DonutCardComponent {
  @Input() donut!: Donut;
}
