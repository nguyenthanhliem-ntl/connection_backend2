import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DistrictService} from '../../service/district.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
districtForm:FormGroup;
id: number;
  constructor(private districtService: DistrictService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getDistrict(this.id);
    })
  }

  ngOnInit() {
  }

  getDistrict(id: number) {
    return this.districtService.findById(id).subscribe(district => {
      this.districtForm = new FormGroup({
        name: new FormGroup(district.name),
      })
    })
  }
  deleteDistrict(id: number) {
    this.districtService.delete(id).subscribe(() => {
      this.router.navigate(['/district/list']);
    }, e => {
      console.log(e);
    });
  }
}
