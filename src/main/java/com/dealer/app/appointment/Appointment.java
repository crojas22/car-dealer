package com.dealer.app.appointment;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
@MappedSuperclass
public abstract class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotNull
    private String name, phone;

    @NotNull
    @Size(min = 5, max = 30, message = "Email must be {min} to {max} characters in length.")
    @Email
    private String email;

    private String  timeCreated;

    {
        timeCreated = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME);
    }

    protected Appointment() {
    }
    public Appointment(String name, String phone, String email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}
