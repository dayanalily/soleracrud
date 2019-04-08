import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './component/crud/crud.component';

const routes: Routes = [
  // {
	// 	path: '',
	// 	loadChildren: 'component/crud'
	// },
	// {
	// 	path: '**',
	// 	redirectTo: '404',
	// 	pathMatch: 'full'
  // }
  {
    path: '', component: CrudComponent,
   
    // children: [
    //   { path: 'modulos', component: ModulosComponent },

    // ]
  },

  // Handle all other routes
  // { path: '**', component: loginComponent },
  // { path: 'login', component: loginComponent },
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
