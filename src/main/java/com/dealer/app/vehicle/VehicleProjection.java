package com.dealer.app.vehicle;

import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "features", types = Vehicle.class)
public interface VehicleProjection {

    int getId();
    String getCarManufacturer();
    String getModel();
    String getVinNumber();
    String getPictureAddress();
    String getExteriorColor();
    String getInteriorColor();
    WheelDrive getwheelDrive();
    CarCondition getCarCondition();
    FuelType getFuelType();
    BodyType getBodyType();
    TransmissionType getTransmissionType();
    int getYear();
    int getStockNumber();
    int getMileage();
    int getPrice();
    int getDiscountedPrice();
    int getMpgStreet();
    int getMpgHighway();

    List<Feature> getFeatures();

}
