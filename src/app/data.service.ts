import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable} from 'rxjs';
export interface parkingplaces{
  name:String,
  lat:String,
  lon:String
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private parkingplacesCollection:AngularFirestoreCollection<parkingplaces>;
  parkingplaces:Observable<parkingplaces[]>;
  places;
  constructor(public afs:AngularFirestore) { 
    this.parkingplacesCollection=afs.collection<parkingplaces>('parkingplaces');
    this.parkingplaces=this.parkingplacesCollection.valueChanges();
    this.parkingplaces.subscribe((data)=>{
      console.log(data);
      this.places=data;
    });
  }
}
