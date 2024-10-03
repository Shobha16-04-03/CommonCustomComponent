import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,DataListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pro';
  totalCount = 0;
  data1 = [{
    name : 'Sam Johnson',
    dept : 'Electrical'
  },{
    name : 'Roy Thomas',
    dept : 'Mechanical'
  },{
    name : 'Jim Lasker',
    dept : 'Medical'
  }];

  data2 = [{
    name : 'Johnson',
    dept : 'Physics'
  },{
    name : 'Thomas',
    dept : 'Chemistry'
  },{
    name : 'Lasker',
    dept : 'Biology'
  }];


  calCount(count:any){
    this.totalCount = this.totalCount + count;
  }
}
