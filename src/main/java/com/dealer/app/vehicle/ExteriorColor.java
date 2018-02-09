package com.dealer.app.vehicle;

public enum ExteriorColor {
    WHITE("White"), BLACK("Black"), BLUE("Blue"), ORANGE("Orange");

    private String name;

    ExteriorColor(String name) {
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
