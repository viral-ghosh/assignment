<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Home</title>
    </head>
    <body>
    <a href="register" >Add new</a>
        <div align="center">
            <table border="1">
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Company</th>
                <th>Company</th>
                <th>Action</th>
                 
                <c:forEach var="e" items="${employees}">
                <tr>
                    <td>${e.id}</td>
                    <td>${e.firstName}</td>
                    <td>${e.lastName}</td>
                    <td>${e.email}</td>
                    <td>${e.gender}</td>
                    <td>${e.company}</td>
                    <td>${e.department}</td>
                    <td>
                      <a href="edit?id=${e.id}" >Edit</a>
                    	<a href="delete?id=${e.id}" >Delete</a>
                    </td>
                  
                             
                </tr>
                </c:forEach>             
            </table>
        </div>
    </body>
</html>
