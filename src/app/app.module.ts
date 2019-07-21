import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var config = {
  apiKey: "AIzaSyAjFfzjikco357qBw-m2OA5I2V6PLHeZaI",
  authDomain: "parkingapp-c7a32.firebaseapp.com",
  databaseURL: "https://parkingapp-c7a32.firebaseio.com",
  projectId: "parkingapp-c7a32",
  storageBucket: "parkingapp-c7a32.appspot.com",
  messagingSenderId: "204338912816"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
