import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-provinces-list',
  templateUrl: './provinces-list.component.html',
  styleUrls: ['./provinces-list.component.css']
})
export class ProvincesListComponent implements OnInit {

  provinces: any[] = [];

  constructor(
    private dataService: DataService
  ) { }  

  ngOnInit() {
    this.dataService.getAllProvinces().subscribe(res => {
      this.provinces.push(...res.provincias);
      this.provinces.sort((a, b) => {        
        return a.NOMBRE_PROVINCIA.localeCompare(b.NOMBRE_PROVINCIA);        
      });
    })
  }

  searchProvince() {
    this.provinces = this.provinces.filter(e => e.CODPROV !== true); 
  }

  removeProvince(event: any) {
    this.provinces = this.provinces.filter(e => e.CODPROV !== event);    
  }

}
