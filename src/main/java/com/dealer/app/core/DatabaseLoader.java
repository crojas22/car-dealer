package com.dealer.app.core;

import com.dealer.app.dealer.Dealer;
import com.dealer.app.dealer.DealerRepo;
import com.dealer.app.vehicle.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements ApplicationRunner {

    private final DealerRepo dealerRepo;

    @Autowired
    public DatabaseLoader(DealerRepo dealerRepo) {
        this.dealerRepo = dealerRepo;
    }


    @Override
    public void run(ApplicationArguments applicationArguments) throws Exception {

        Dealer chrisDealer = new Dealer("Motor World", "1130 SW 9th Way", "Miami", "FL", "33212", "3056667777");

        chrisDealer.addVehicle(new Vehicle("Bmw","328i","/images/bmw.jpeg", CarCondition.NEW, FuelType.GASOLINE, BodyType.SEDAN,
                    TransmissionType.AUTOMATIC, 2017, 223332, 5000, 40000, 40000,
                    22, 30
                ));
        this.dealerRepo.save(chrisDealer);
    }
}
