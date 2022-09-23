import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatedoctorComponent } from './createdoctor.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CreatedoctorComponent', () => {
  let component: CreatedoctorComponent;
  let fixture: ComponentFixture<CreatedoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedoctorComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should create', () => {
 expect(component).toBeTruthy();
 });


});
