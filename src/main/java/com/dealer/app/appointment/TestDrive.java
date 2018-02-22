package com.dealer.app.appointment;

import com.dealer.app.vehicle.Vehicle;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Getter
@Setter
public class TestDrive extends Appointment {
    @OneToOne
    @JoinColumn(name="vehicle_id")
    private Vehicle vehicleInterested;
    private String date, time;

    protected TestDrive() {
    }

    public TestDrive(String name,
                     String phone,
                     String email,
                     String date,
                     String  time,
                     Vehicle vehicleInterested) {
        super(name, phone, email);
        this.date = date;
        this.time = time;
        this.vehicleInterested = vehicleInterested;
    }
}
