import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'user-form', component: UserFormComponent }
];
