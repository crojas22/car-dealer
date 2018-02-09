package com.dealer.app.vehicle;

public enum BodyType {
    SEDAN("Sedan"), COUPE("Coupe"), SUV("SUV"), TRUCK("Truck");

    private String name;

    BodyType(String name) {
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
