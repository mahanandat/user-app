import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';

export const routeData: Routes = [
    {
        path: '', redirectTo: 'users', pathMatch: 'full'
    },
    {
        path: 'users', component: UserListComponent
    },
    {
        path: 'user/:id', component: UserAddEditComponent
    }
];
