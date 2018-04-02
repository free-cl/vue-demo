<%@ page contentType="text/html;charset=utf-8" session="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

{
	"_RejCode":"${_exception.message}",
	"_RejMsg":"${_exceptionMessage}",
	"jsonError":[{"_exceptionMessageCode":"${_exception.message}","_exceptionMessage":"${_exceptionMessage}"}]
}
