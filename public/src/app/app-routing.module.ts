import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardGroupComponent } from './card-group/card-group.component';

//This is my case 
const routes: Routes = [
    {
        path: '',
        redirectTo: 'p/0',
        pathMatch: 'full'
    },
    {
        path: 'p/:id',
        component: CardGroupComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }