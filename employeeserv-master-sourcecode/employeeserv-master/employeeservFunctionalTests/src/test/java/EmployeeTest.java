import com.paypal.bfs.test.employeeserv.EmployeeservApplication;
import com.paypal.bfs.test.employeeserv.api.EmployeeResource;
import com.paypal.bfs.test.employeeserv.api.model.Address;
import com.paypal.bfs.test.employeeserv.api.model.Employee;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = EmployeeservApplication.class)
public class EmployeeTest {

    @Autowired
    private EmployeeResource employeeResource;

    @Test
    public void createEmployee() throws Exception {
        Employee employee = new Employee();
        employee.setFirstName("Demo");
        employee.setFirstName("Promo");
        employee.setDateOfBirth("10-01-1990");
        employee.setAddress(new Address());
        ResponseEntity<Employee> emp = employeeResource.createEmployee(employee);
        assertNotEquals(java.util.Optional.ofNullable(emp.getBody().getId()), 0);
    }

    @Test
    public void getEmployee() throws Exception {
        Employee employee = new Employee();
        employee.setFirstName("Demo");
        employee.setFirstName("Promo");
        employee.setDateOfBirth("10-01-1990");
        employee.setAddress(new Address());
        ResponseEntity<Employee> emp = employeeResource.createEmployee(employee);
        Integer id = emp.getBody().getId();
        ResponseEntity<Employee> res = employeeResource.employeeGetById(id + "");
        assertNotNull(res);
    }

}