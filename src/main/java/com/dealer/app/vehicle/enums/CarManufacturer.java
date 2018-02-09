package com.dealer.app.vehicle.enums;

public enum CarManufacturer {
    BMW("BMW"), MERCEDES("Mercedes Benz");

    private String name;

    CarManufacturer(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }


    @Override
    public String toString() {
        return this.name;
    }
}
