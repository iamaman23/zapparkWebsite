import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parkingPlaces;
  places;
  constructor(public ds:DataService, private modalService:NgbModal) {
    this.parkingPlaces=ds.parkingplaces;
    this.places=ds.places;
  }

  initializeItems(){
    this.places=this.ds.places;
  }
  ngOnInit() {
  }
  call($event){
    this.initializeItems();
    const val=$event.target.value;
    if(val && val.trim()!=''){
      this.places=this.places.filter((item)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1)
      });
    }
  }
  modalTitle;
  availability;
  price;
  spots;
  open(content,item) {
    this.modalTitle=item.name;
    this.availability=item.status;
    this.price=item.price;
    this.spots=item.spots;
    this.modalService.open(content, { centered: true });
  }
}
