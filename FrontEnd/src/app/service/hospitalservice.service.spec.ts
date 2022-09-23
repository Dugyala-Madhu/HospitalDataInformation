import { TestBed } from '@angular/core/testing';

import { HospitalserviceService } from './hospitalservice.service';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HospitalserviceService', () => {
  

beforeEach(() =>TestBed.configureTestingModule({
  imports:[HttpClientTestingModule],
  providers:[HospitalserviceService]
}));

it('should be created',()=>{
  const service:HospitalserviceService=TestBed.get(HospitalserviceService);
  expect(service).toBeTruthy();
});

//it('should have getData function',()=>{
 // const service:HospitalserviceService=TestBed.get(HospitalserviceService);
  //expect(service.getData).toBeTruthy();
//});
});