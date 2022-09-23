package com.mindtree.hospitaldetail;




import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.annotation.Order;
import com.mindtree.hospitaldetail.entity.Doctor;
import com.mindtree.hospitaldetail.repository.DoctorRepository;
import com.mindtree.hospitaldetail.serviceimpl.HospitalServiceImpl;





@SpringBootTest(classes= {Testing.class})
public class Testing<Doctorentity> {
	
	@Mock
	DoctorRepository doctorrepo;
	
	@InjectMocks
	HospitalServiceImpl hospitalServiceimpl;
	
	public List<Doctor> mydoctor;
	@Test
	@Order (1)
public  void test_getDoctors() {
		
		List<Doctor> mydoctor=new ArrayList<Doctor>();
		mydoctor.add(new Doctor("vijay",15,"Gyanecology","Female"));
		mydoctor.add(new Doctor("Madhu",18,"Gyanecology","Female"));
		when (doctorrepo.findAll()).thenReturn( mydoctor);
		hospitalServiceimpl.getDoctors().size();
		assertEquals(2,hospitalServiceimpl.getDoctors().size());
		
	}

	public void test_saveDoctorInformation(Doctor Doctor,Object S)
	{
	
	List<Doctor> doctor=new ArrayList<Doctor>();
	when(doctorrepo.save(null)).thenReturn(doctor);
	hospitalServiceimpl.saveDoctorInformation(Doctor);
	

	}
}

