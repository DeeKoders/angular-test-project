import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CardsComponent } from "./cards/cards.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "", component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
