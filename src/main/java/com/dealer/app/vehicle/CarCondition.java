package com.dealer.app.vehicle;


public enum CarCondition {
    NEW("New"), USED("Used");

    private String name;

    CarCondition(String name) {
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
