package com.dealer.app.application;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Email;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
@MappedSuperclass
public abstract class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotNull
    private String first, last , phone;

    @NotNull
    @Size(min = 5, max = 30, message = "Email must be {min} to {max} characters in length.")
    @Email
    private String email;

    private String  timeCreated;

    {
        timeCreated = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME);
    }

    protected Application() {
    }

    public Application(String first,
                       String last,
                       String phone,
                       String email) {
        this.first = first;
        this.last = last;
        this.phone = phone;
        this.email = email;
    }
}
