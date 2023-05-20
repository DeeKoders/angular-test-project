import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5 mb-2">
      <a class="navbar-brand" routerLink="/">Logo</a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" routerLink="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
