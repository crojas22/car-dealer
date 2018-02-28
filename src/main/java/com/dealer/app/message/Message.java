package com.dealer.app.message;

import com.dealer.app.vehicle.Vehicle;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Getter
@Setter
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotNull
    private String name, phone;
    private String message;

    @NotNull
    @Size(min = 5, max = 30, message = "Email must be {min} to {max} characters in length.")
    @Email
    private String email;
    @OneToOne
    @JoinColumn(name="vehicle_id")
    private Vehicle vehicleInquiringAbout;
    private String  timeCreated;

    {
        timeCreated = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME);
    }

    protected Message() {
    }

    public Message(String name,
                   String phone,
                   String message,
                   String email,
                   Vehicle vehicleInquiringAbout) {
        this.name = name;
        this.phone = phone;
        this.message = message;
        this.email = email;
        this.vehicleInquiringAbout = vehicleInquiringAbout;
    }
}
