package com.aimdek.spring.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;

import com.aimdek.spring.dao.EmployeeDAO;
import com.aimdek.spring.model.Employee;

public class EmployeeDAOImpl implements EmployeeDAO{
	
	private JdbcTemplate jdbcTemplate;

	public EmployeeDAOImpl(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }
	
	@Override
	public List<Employee> getEmployeeList() {
		String sql ="SELECT * FROM dbo.employeetbl";
		return jdbcTemplate.query(sql, new RowMapper<Employee>() {
			@Override
			public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
				Employee employee = new Employee();
				employee.setId(rs.getInt(1));
				employee.setFirstName(rs.getString(2));
				employee.setLastName(rs.getString(3));
				employee.setEmail(rs.getString(4));
				employee.setGender(rs.getString(5));
				employee.setCompany(rs.getInt(6));
				employee.setDepartment(rs.getInt(7));
				return employee;
			}
		});
	}

	@Override
	public Employee getEmployee(int employeeId) {
		String sql ="SELECT * FROM dbo.employeetbl WHERE id="+employeeId;
		return jdbcTemplate.query(sql, new ResultSetExtractor<Employee>() {
			@Override
			public Employee extractData(ResultSet rs) throws SQLException, DataAccessException {
				 if (rs.next()) {
					 Employee employee = new Employee();
					 	employee.setId(rs.getInt(1));
						employee.setFirstName(rs.getString(2));
						employee.setLastName(rs.getString(3));
						employee.setEmail(rs.getString(4));
						employee.setGender(rs.getString(5));
						employee.setCompany(rs.getInt(6));
						employee.setDepartment(rs.getInt(7));
					return employee;
				 }
				return null;
			}
		});
	}
	
	@Override
	public void insertOrUpdateEmployee(Employee emp) {
		if(emp.getId()==0) {
		String sql = "INSERT INTO dbo.employeetbl VALUES (?,?,?,?,?,?,?)";
		jdbcTemplate.update(sql,emp.getId(),emp.getFirstName(),emp.getLastName(),emp.getEmail(),
				emp.getGender(),emp.getCompany(),emp.getDepartment());	}
		else {
			String sql = "UPDATE dbo.employeetbl SET firstName=?,lastName=?,email=?, gender=?,"
					+ "company=?,department=? WHERE id=?";
			jdbcTemplate.update(sql,emp.getFirstName(),emp.getLastName(),emp.getEmail(),
					emp.getGender(),emp.getCompany(),emp.getDepartment(),emp.getId());
		}
	}

	@Override
	public void deleteEmployee(int id) {
		String sql = "DELETE FROM dbo.employeetbl WHERE id=?";
	    jdbcTemplate.update(sql, id);
	}
}
