import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDialogComponent } from './post-dialog.component';
import { DataService } from '../data/data.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
         MatIconModule,
         MatListModule,
         MatDialogModule,
         MatInputModule,
         MatSelectModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

xdescribe('PostDialogComponent', () => {
  let component: PostDialogComponent;
  let fixture: ComponentFixture<PostDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
        MatDialogRef,
        MAT_DIALOG_DATA
      ],
      imports: [
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      declarations: [ PostDialogComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(PostDialogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  /*beforeEach(() => {
    fixture = TestBed.createComponent(PostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
