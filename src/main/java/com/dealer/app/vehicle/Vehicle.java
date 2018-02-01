package com.dealer.app.vehicle;

import com.dealer.app.dealer.Dealer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String carManufacturer,model, pictureAddress;
    @Enumerated(EnumType.STRING)
    private CarCondition carCondition;
    @Enumerated(EnumType.STRING)
    private FuelType fuelType;
    @Enumerated(EnumType.STRING)
    private BodyType bodyType;
    @Enumerated(EnumType.STRING)
    private TransmissionType transmissionType;
    private int year, stockNumber, mileage, price, discountedPrice, mpgStreet, mpgHighway;

    @OneToMany(mappedBy = "vehicle", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Feature> features;

    @JsonIgnore
    @ManyToOne
    private Dealer dealer;

    {
        features = new ArrayList<>();
    }

    Vehicle() {
    }

    public Vehicle(String carManufacturer,
            String model,
            String pictureAddress,
            CarCondition carCondition,
            FuelType fuelType,
            BodyType bodyType,
            TransmissionType transmissionType,
            int year,
            int stockNumber,
            int mileage,
            int price,
            int discountedPrice,
            int mpgStreet,
            int mpgHighway) {
        this.carManufacturer = carManufacturer;
        this.model = model;
        this.pictureAddress = pictureAddress;
        this.carCondition = carCondition;
        this.fuelType = fuelType;
        this.bodyType = bodyType;
        this.transmissionType = transmissionType;
        this.year = year;
        this.stockNumber = stockNumber;
        this.mileage = mileage;
        this.price = price;
        this.discountedPrice = discountedPrice;
        this.mpgStreet = mpgStreet;
        this.mpgHighway = mpgHighway;
    }

    public void addFeatures(Feature feature) {
        feature.setVehicle(this);
        features.add(feature);
    }
}
