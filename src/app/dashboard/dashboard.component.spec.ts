import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DataService } from '../data/data.service';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material';

import { RouterTestingModule } from '@angular/router/testing';

import {
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatDialogModule } from '@angular/material';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        MatDialog,
        DataService,
      ],
      imports: [
        MatIconModule,
        MatCardModule,
        MatTableModule,
        RouterTestingModule,
        MatDialogModule ],
      declarations: [ DashboardComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));


  it('should create', async(inject([AuthService, MatDialog, DataService],
    (auth: AuthService, dialog: MatDialog, dataService: DataService) => {
    expect(component).toBeTruthy();
  })));
});
