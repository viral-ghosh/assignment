package com.aimdek.spring.dao;

import java.util.List;

import com.aimdek.spring.model.Employee;

public interface EmployeeDAO {

	public List<Employee> getEmployeeList();
	public Employee getEmployee(int id);
	public void insertOrUpdateEmployee(Employee emp);
	public void deleteEmployee(int employeeId);
}
