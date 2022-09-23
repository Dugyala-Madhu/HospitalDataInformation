import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatepatientComponent } from './createpatient.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('CreatepatientComponent', () => {
  let component: CreatepatientComponent;
  let fixture: ComponentFixture<CreatepatientComponent>;

 beforeEach(async () => {
   await TestBed.configureTestingModule({
  
      declarations: [ CreatepatientComponent ],
     imports:[RouterTestingModule,HttpClientTestingModule],

    })
  .compileComponents();
  });

 beforeEach(() => {
   fixture = TestBed.createComponent(CreatepatientComponent);
   component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  expect(component).toBeTruthy();
});
});

