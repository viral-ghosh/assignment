package com.aimdek.spring.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.aimdek.spring.dao.EmployeeDAO;
import com.aimdek.spring.model.Employee;

@Controller
public class HomeController {

	@Autowired
    private EmployeeDAO employeeDAO;
	
	@RequestMapping(value="/",method = RequestMethod.GET)
	public ModelAndView list(ModelAndView model) throws IOException{
		List<Employee> list = employeeDAO.getEmployeeList();
		model.addObject("employees",list);
		model.setViewName("home");
		return model;
	}
	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public ModelAndView newEmployee(ModelAndView model) {
	    Employee employee = new Employee();
	    model.addObject("employee", employee);
	    model.setViewName("EmployeeForm");
	    return model;
	}
	@RequestMapping(value = "/insertOrUpdate", method = RequestMethod.POST)
	public ModelAndView saveEmployee(@ModelAttribute Employee employee) {
	    employeeDAO.insertOrUpdateEmployee(employee);
	    return new ModelAndView("redirect:/");
	}
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public ModelAndView edit(HttpServletRequest request) {
	    int employeeId = Integer.parseInt(request.getParameter("id"));
	    Employee employee = employeeDAO.getEmployee(employeeId);
	    System.out.println(employeeId);
	    ModelAndView model = new ModelAndView("EmployeeForm");
	    model.addObject("employee", employee);
	 
	    return model;
	}
	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	public ModelAndView delete(HttpServletRequest request) {
	    int employeeId = Integer.parseInt(request.getParameter("id"));
	    employeeDAO.deleteEmployee(employeeId);
	 
	    return new ModelAndView("redirect:/");
	}
}
