package com.dealer.app.vehicle.enums;

public enum CarYear {
    NINETEEN(2019), EIGHTEEN(2018), SEVENTEEN(2017), SIXTEEN(2016), FIFTEEN(2015), FOURTEEN(2014);
    private int year;

    CarYear(int year) {
        this.year = year;
    }

    public int getYear() {
        return year;
    }
}
