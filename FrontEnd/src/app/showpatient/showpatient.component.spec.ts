import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpatientComponent } from './showpatient.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('ShowpatientComponent', () => {
  let component: ShowpatientComponent;
  let fixture: ComponentFixture<ShowpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpatientComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
});

  
});

