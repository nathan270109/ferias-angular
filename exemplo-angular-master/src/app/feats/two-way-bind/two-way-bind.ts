import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-bind',
  imports: [FormsModule],
  templateUrl: './two-way-bind.html',
  styleUrl: './two-way-bind.css',
})
export class TwoWayBind {

  nome = ''

}
