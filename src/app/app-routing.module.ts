import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypesBoardComponent} from './types-board/types-board.component';
import {WheelComponent} from './wheel/wheel.component';


const routes: Routes = [
  // { path: '/', component: WheelComponent },
  { path: 'board', component: TypesBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
