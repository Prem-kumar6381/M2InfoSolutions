import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpublishingComponent } from './epublishing/epublishing.component';
import { HomeComponent } from './home/home.component';
import { AccessibilityservicesComponent } from './accessibilityservices/accessibilityservices.component';
import { DataannotationComponent } from './dataannotation/dataannotation.component';

const routes: Routes = [
  {
    path:"services/e-publishing",
    component: EpublishingComponent
  },
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"services/accessibilityservices",
    component:AccessibilityservicesComponent
  },
  {
    path:"services/dataannotation",
    component:DataannotationComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)  // No scroll restoration, normal behavior
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


