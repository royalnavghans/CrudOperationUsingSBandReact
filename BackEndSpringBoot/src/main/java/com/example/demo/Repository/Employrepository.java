package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.EmployModel;

@Repository
public interface Employrepository extends MongoRepository<EmployModel, String> {
	
	public List<EmployModel> findEmployeeByfirstname(String name);

}
