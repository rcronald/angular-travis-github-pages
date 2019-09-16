import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DataService } from './data/data.service';
import { AuthService } from './auth.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule, 
         MatIconModule,
         MatListModule,
         MatToolbarModule } from '@angular/material';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
        AuthService
      ],
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      appComponent = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {
    expect(appComponent).toBeTruthy();
  }));

});
