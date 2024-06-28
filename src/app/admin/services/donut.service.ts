import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [
    {
      id: 'yayq1',
      name: 'just-chocolate1',
      price: 119,
      icon: 'just-chocolate1-img',
      description: 'For the pure chocoholic',
      promo: 'limited',
    },
    {
      id: 'yayq2',
      name: 'just-chocolate2',
      price: 129,
      icon: 'just-chocolate2-img',
      description: 'For the pure chocoholic extra',
      promo: 'new',
    },
  ];

  constructor(private http: HttpClient) {}

  readObs() {
    return this.http.get<Donut[]>('/api/donuts');
  }

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find((donut: Donut) => donut.id === id);

    if (donut) {
      return donut;
    }

    return {
      name: '',
      price: 0,
      icon: '',
      description: '',
    };
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
    console.log(this.donuts);
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut: Donut) => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    });
    console.log(this.donuts);
  }

  delete(payload: Donut) {
    this.donuts = this.donuts.filter((donut: Donut) => donut.id !== payload.id);
    console.log(this.donuts);
  }
}
