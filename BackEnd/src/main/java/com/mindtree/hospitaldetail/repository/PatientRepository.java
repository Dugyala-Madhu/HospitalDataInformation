package com.mindtree.hospitaldetail.repository;

import com.mindtree.hospitaldetail.entity.Patient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface PatientRepository extends CrudRepository<Patient,Integer> {

}