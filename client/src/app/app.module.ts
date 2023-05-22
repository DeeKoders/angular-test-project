import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CardsComponent } from "./cards/cards.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CardsComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
