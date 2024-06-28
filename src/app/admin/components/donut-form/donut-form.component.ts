import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrl: './donut-form.component.css',
})
export class DonutFormComponent {
  @Input() donut!: Donut;

  @Output() create = new EventEmitter<Donut>();
  @Output() update = new EventEmitter<Donut>();
  @Output() delete = new EventEmitter<Donut>();

  icons: string[] = ['just-chocolate1-img', 'just-chocolate2-img', 'icon3'];

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    } else {
      form.form.markAllAsTouched();
      console.log('Invalid!');
    }
  }

  handleUpdate(form: NgForm) {
    if (form.valid) {
      this.update.emit({ id: this.donut.id, ...form.value });
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleDelete() {
    if (confirm(`Really delete ${this.donut.name}`)) {
      this.delete.emit({ ...this.donut });
    }
  }
}
