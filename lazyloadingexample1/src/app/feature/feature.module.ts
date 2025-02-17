import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  { path: '', component: FeatureComponent }
];

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeatureModule { }
