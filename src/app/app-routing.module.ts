import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import the UserComponent
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    // 4. The default route
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    // 5. Map /users to the UsersComponent
    { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
