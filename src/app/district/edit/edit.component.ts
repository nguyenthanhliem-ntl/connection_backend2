import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DistrictService} from '../../service/district.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
districtForm: FormGroup;
id: number;
  constructor(private districtService: DistrictService,
              private activateRouter: ActivatedRoute) {
    this.activateRouter.paramMap.subscribe((paramMap:ParamMap) => {
      this.id = +paramMap.get('id');
      this.getDistrict(this.id);
    })
  }

  ngOnInit() {
  }

  getDistrict(id: number) {
    return this.districtService.findById(id).subscribe(district => {
      this.districtForm = new FormGroup({
        name: new FormControl(district.name),
      });
    });
  }

  update(id: number) {
    const district = this.districtForm.value;
    this.districtService.update(id, district).subscribe(() => {
      alert('ok');
    } ,e => {
      console.log(e);
    } )
  }
}
