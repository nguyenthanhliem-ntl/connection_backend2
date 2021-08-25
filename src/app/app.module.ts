import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DistrictComponent } from './district/district.component';
import { CreateComponent } from './district/create/create.component';
import { LsitComponent } from './district/lsit/lsit.component';
import { ListComponent } from './district/list/list.component';
import { DeleteComponent } from './district/delete/delete.component';
import { EditComponent } from './district/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DistrictComponent,
    CreateComponent,
    LsitComponent,
    ListComponent,
    DeleteComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
