package com.dealer.app.dealer;

import com.dealer.app.vehicle.Vehicle;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Dealer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name, address, city, state, zipCode, phoneNumber;
    @OneToMany(mappedBy = "dealer", cascade = CascadeType.ALL)
    private List<Vehicle> vehicles;

    {
        vehicles = new ArrayList<>();
    }

    protected Dealer() {
    }

    public Dealer(String name, String address, String city, String state, String zipCode, String phoneNumber) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
    }

    public void addVehicle(Vehicle vehicle) {
        vehicle.setDealer(this);
        this.vehicles.add(vehicle);
    }
}
