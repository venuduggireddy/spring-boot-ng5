import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : 'users', component: UserComponent},
  {path: 'add', component: AddUserComponent},
  {path: 'avatar', component: PageNotFoundComponent},
  {path: 'security', component: PageNotFoundComponent},
  {path: 'pwa', component: PageNotFoundComponent},
  {path: '', redirectTo:'/users', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
