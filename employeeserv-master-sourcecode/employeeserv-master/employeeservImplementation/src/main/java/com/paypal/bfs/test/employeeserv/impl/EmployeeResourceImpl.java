package com.paypal.bfs.test.employeeserv.impl;

import com.paypal.bfs.test.employeeserv.api.EmployeeResource;
import com.paypal.bfs.test.employeeserv.api.model.Address;
import com.paypal.bfs.test.employeeserv.api.model.Employee;
import com.paypal.bfs.test.employeeserv.model.EmployeeDB;
import com.paypal.bfs.test.employeeserv.model.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

/**
 * Implementation class for employee resource.
 */
@RestController
public class EmployeeResourceImpl implements EmployeeResource {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public ResponseEntity<Employee> employeeGetById(String id) {
        try {
            Optional<EmployeeDB> employeeDB = employeeRepository.findById(Integer.parseInt(id));
            return new ResponseEntity<>(toEmployee(employeeDB.get()), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(new Employee(), HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<Employee> createEmployee(Employee employee) {
        try {
            EmployeeDB employeeDB = employeeRepository.save(toEmployeeDB(employee));
            return new ResponseEntity<>(toEmployee(employeeDB), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Employee(), HttpStatus.BAD_REQUEST);
        }
    }

    private EmployeeDB toEmployeeDB(Employee employee) {
        return new EmployeeDB(
                employee.getFirstName(),
                employee.getLastName(),
                employee.getDateOfBirth(),
                employee.getAddress().getLine1(),
                employee.getAddress().getLine2(),
                employee.getAddress().getState(),
                employee.getAddress().getCountry()
        );
    }

    private Employee toEmployee(EmployeeDB employeeDB) {
        Employee employee = new Employee();
        employee.setId(employeeDB.getId());
        employee.setFirstName(employeeDB.getFirst_name());
        employee.setLastName(employeeDB.getLast_name());
        employee.setDateOfBirth(employeeDB.getDate_of_birth());
        Address address = new Address();
        address.setLine1(employeeDB.getLine1());
        address.setLine2(employeeDB.getLine2());
        address.setState(employeeDB.getState());
        address.setCountry(employeeDB.getCountry());
        employee.setAddress(address);
        return employee;
    }

}
