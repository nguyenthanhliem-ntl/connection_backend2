import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DistrictService} from '../../service/district.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  districtForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });
  constructor(private districtService: DistrictService) { }

  ngOnInit() {
  }
  submit(){
    const district = this.districtForm.value;
    this.districtService.save(district).subscribe(() => {
      this.districtForm.reset();
      alert('them');
    },e => {
      console.log(e);
    });
  }
}
