package com.dealer.app.vehicle;

public enum FuelType {
    GASOLINE("Gasoline"), DIESEL("Diesel"), ELECTRIC("Electric"), HYBRID("Hybrid");

    private String name;

    FuelType(String name) {
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
