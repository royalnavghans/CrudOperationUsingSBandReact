package com.example.demo.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Data
@NoArgsConstructor 	 	
@AllArgsConstructor
@Document(collection="employdata")
public class EmployModel {

	@Id
	public String id;
	public String firstname;
	public String lastname;
	public String emailid;
	public long phonenumber;
	
}
