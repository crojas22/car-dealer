package com.dealer.app.vehicle;

public enum TransmissionType {
    MANUAL("Manual"), AUTOMATIC("Automatic");

    private String name;

    TransmissionType(String name) {
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
