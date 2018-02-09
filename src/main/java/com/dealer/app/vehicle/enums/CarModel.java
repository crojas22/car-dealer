package com.dealer.app.vehicle.enums;

public enum CarModel {
    BMWFIVE("535i"), BWMTHREE("328i"), MERCEDESC("C-Class");

    private String name;

    CarModel(String name) {
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
