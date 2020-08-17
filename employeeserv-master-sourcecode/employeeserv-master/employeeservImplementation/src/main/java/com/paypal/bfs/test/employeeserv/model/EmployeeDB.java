package com.paypal.bfs.test.employeeserv.model;

import javax.persistence.*;

@Entity
@Table(name = "Employee")
public class EmployeeDB {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String first_name;
    private String last_name;
    private String date_of_birth;
    private String line1;
    private String line2;
    private String state;
    private String country;

    public EmployeeDB() {

    }

    public EmployeeDB(String first_name, String last_name, String date_of_birth, String line1, String line2, String state, String country) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.line1 = line1;
        this.line2 = line2;
        this.state = state;
        this.country = country;
    }

    public Integer getId() {
        return id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getDate_of_birth() {
        return date_of_birth;
    }

    public String getLine1() {
        return line1;
    }

    public String getLine2() {
        return line2;
    }

    public String getState() {
        return state;
    }

    public String getCountry() {
        return country;
    }
}
