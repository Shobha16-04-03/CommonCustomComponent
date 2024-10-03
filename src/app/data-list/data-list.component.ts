import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent implements OnInit {
  @Input()
  data: any;
  @Input() showCount = false;
  @Output() calCount = new EventEmitter<Number>();

  constructor(){}
  ngOnInit(): void {
    this.calCount.emit(this.data.length);
  
  }
}
