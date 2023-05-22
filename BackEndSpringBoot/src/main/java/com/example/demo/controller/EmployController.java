package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.EmployModel;
import com.example.demo.Repository.Employrepository;
import com.example.demo.exception.ExceptionHandling;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee")
public class EmployController {

	@Autowired
	private Employrepository employrepository;
	
	@GetMapping
	public List<EmployModel> getemploys(){
		return employrepository.findAll();
	}
	
	
	@PostMapping
	public EmployModel createemploy(@RequestBody EmployModel employModel) {
		return employrepository.insert(employModel);
		
	}
	
	//build get employ by id 
	@GetMapping("{id}")
	public ResponseEntity<EmployModel> getEmploybyid(@PathVariable String id){
		EmployModel employee = employrepository.findById(id)
				.orElseThrow(() -> new ExceptionHandling("Employees not exist with id:" +id));
return ResponseEntity.ok(employee);
	}
	
	
	//build update employ rest api
	@PutMapping("{id}")
	public ResponseEntity<EmployModel> updateEmploy(@PathVariable String id, @RequestBody EmployModel employdetails){
	EmployModel updateemploy= employrepository.findById(id).orElseThrow(()->new ExceptionHandling("employee not exist with id:" +id));
	updateemploy.setFirstname(employdetails.getFirstname());
	updateemploy.setLastname(employdetails.getLastname());
	updateemploy.setEmailid(employdetails.getEmailid());
	updateemploy.setPhonenumber(employdetails.getPhonenumber());
	
	employrepository.save(updateemploy);
	return ResponseEntity.ok(updateemploy);
	}
	@GetMapping("/name/{name}")
	public List<EmployModel> getEmployeeUsingFirstName(@PathVariable("name") String name) {
		return employrepository.findEmployeeByfirstname(name);
		
	}
	
	//build delete employee restapi
	
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> deleteemploy(@PathVariable String id){
		EmployModel employee = employrepository.findById(id)
				.orElseThrow(()-> new ExceptionHandling("Employee not exist with id: "+id));
		employrepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
		
	}
	
	
	}

