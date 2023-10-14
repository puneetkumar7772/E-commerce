import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'seller',
    loadChildren: () => import('./modules/sellermodule/sellermodule.module').then(m => m.SellermoduleModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/usermodule/usermodule.module').then(m => m.UsermoduleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
