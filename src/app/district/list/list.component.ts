import { Component, OnInit } from '@angular/core';
import {DistrictService} from '../../service/district.service';
import {District} from '../../model/district';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  districts : District[] =[];
  constructor(private districtService: DistrictService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.districtService.getAll().subscribe(districts =>{
      this.districts = districts;
    })
  }
}
