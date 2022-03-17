import { Output, Input, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-province-card',
  templateUrl: './province-card.component.html',
  styleUrls: ['./province-card.component.css']
})
export class ProvinceCardComponent implements OnInit {
  @Input() province: any = {};
  @Output() provinceToRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {    
  }

  deleteProvince(value: string) {
    this.provinceToRemove.emit(value);
  }

}
