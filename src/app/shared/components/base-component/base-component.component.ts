import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-base-component',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './base-component.component.html',
  styleUrl: './base-component.component.scss'
})
export class BaseComponentComponent {

}
