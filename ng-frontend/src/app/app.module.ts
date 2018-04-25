import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './user/user.service';
import { AddUserService } from './add-user/add-user.service';
import { HttpClientModule } from '@angular/common/http';
import { AvatarComponent } from './upload/avatar/avatar.component';
import { UploadService } from './upload/upload.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    PageNotFoundComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, AddUserService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
