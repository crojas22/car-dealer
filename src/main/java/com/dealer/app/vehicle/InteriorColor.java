package com.dealer.app.vehicle;

public enum InteriorColor {
    BLACK("Black"), WHITE("White"), BEIGE("Beige"), GREY("Grey");

    private String name;

    InteriorColor(String name) {
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
