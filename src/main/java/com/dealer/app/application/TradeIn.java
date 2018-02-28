package com.dealer.app.application;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
public class TradeIn extends Application {

    private String comment, make, model, year, transmission, mileage, vin, exteriorCondition, interiorCondition, accident;

    protected TradeIn() {
    }

    public TradeIn(String first,
                   String last,
                   String phone,
                   String email,
                   String comment,
                   String make,
                   String model,
                   String year,
                   String transmission,
                   String mileage,
                   String vin,
                   String exteriorCondition,
                   String interiorCondition,
                   String accident) {
        super(first, last, phone, email);
        this.comment = comment;
        this.make = make;
        this.model = model;
        this.year = year;
        this.transmission = transmission;
        this.mileage = mileage;
        this.vin = vin;
        this.exteriorCondition = exteriorCondition;
        this.interiorCondition = interiorCondition;
        this.accident = accident;
    }
}
