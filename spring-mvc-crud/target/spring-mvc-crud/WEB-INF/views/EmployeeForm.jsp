<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="f" %>
<f:form action="insertOrUpdate" method="post" modelAttribute="employee">
<f:hidden path="id"/>
First Name:<f:input path="firstName"/><br/>
Last Name:<f:input path="lastName"/><br/>
Email:<f:input path="email"/><br/>
Gender:<f:input path="gender"/><br/>
Company:<f:input path="company"/><br/>
Department:<f:input path="department"/><br/>

<input type="submit" value="submit">
</f:form>


</body>
</html>