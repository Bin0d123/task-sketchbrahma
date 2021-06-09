import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{ MetaDataService } from './meta-data.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public apiData = [];
  // public apiDataCity = [];
  public clickname(y){
    this.data.getDetailName(y).subscribe(getName=>this.apiData = getName);
  }
   public clickCity(x){
    this.data.getDetailCity(x).subscribe(getCity=>this.apiData = getCity);
   }

  //  public OnSubmit(obj){
  //   const data = obj.txtName
  //   this.data.getDetailName(data).subscribe(getName=>this.apiDataName = getName);
  //   this.data.getDetailCity(data).subscribe(getCity=>this.apiDataCity = getCity);
  //  }
  
    constructor(private router: Router, private route: ActivatedRoute, private data: MetaDataService ) { }
  ngOnInit(): void {}
}
