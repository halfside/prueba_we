import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-province-info',
  templateUrl: './province-info.component.html',
  styleUrls: ['./province-info.component.css']
})
export class ProvinceInfoComponent implements OnInit {

  provinceData: any = {};
  loading: boolean = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => this.loadData(params.id));
  }

  ngOnInit(): void {
  }

  loadData(id: string) {
    this.loading = true;
    this.dataService.getProvinceInfo(id).subscribe(res => {
      this.provinceData = res;
      this.loading = false;
    }, error => {
      this.router.navigate(['error']);      
    });
  }

}
