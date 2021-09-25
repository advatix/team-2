import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
const routes: Routes = [
  { path: '', redirectTo: 'warehouse', pathMatch: 'full' },
  { path: 'warehouse', loadChildren: () => import('./modules/warehouse/warehouse.module').then(m => m.WarehouseModule) },
  { path: 'floor', loadChildren: () => import('./modules/floor/floor.module').then(m => m.FloorModule) },
  { path: 'rack', loadChildren: () => import('./modules/rack/rack.module').then(m => m.RackModule) },
  { path: 'shelf', loadChildren: () => import('./modules/shelf/shelf.module').then(m => m.ShelfModule) },
  { path: 'bin', loadChildren: () => import('./modules/bin/bin.module').then(m => m.BinModule) },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers : [
    CanDeactivateGuard
  ]
})
export class AppRoutingModule { }
