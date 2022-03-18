import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/models/provincia';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-provinces-list',
  templateUrl: './provinces-list.component.html',
  styleUrls: ['./provinces-list.component.css']
})
export class ProvincesListComponent implements OnInit {

  provinces: Provincia[] = [];
  loading: boolean = false;
  error: boolean = false;
  searchTerm: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.dataService.getAllProvinces().subscribe(res => {
      this.provinces.push(...res.provincias);
      this.provinces.sort((a, b) => {
        return a.NOMBRE_PROVINCIA.localeCompare(b.NOMBRE_PROVINCIA);
      });
      console.log(res);
      
      this.loading = false
    }, error => {
      this.error = true;
      console.log('Oops something went wrong ---> ', error);
    })
  }

  removeProvince(event: any) {
    this.provinces = this.provinces.filter(e => e.CODPROV !== event);
  }

}
