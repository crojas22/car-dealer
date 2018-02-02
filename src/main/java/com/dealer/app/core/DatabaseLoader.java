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


        chrisDealer.addVehicle(new Vehicle("BMW","535i","1221343343322","/images/2018bmw535i/2018bmw535i.jpeg",
                "white", "beige", WheelDrive.RWD ,CarCondition.NEW, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2018, 223332, 5000, 60000, 60000,
                20, 25
        ));
        chrisDealer.addVehicle(new Vehicle("Mercedes-Benz","G63","1221343343322","/images/2017mercedes-benzg63/2017mercedes-benzg63.jpeg",
                "orange", "black", WheelDrive.AWD ,CarCondition.NEW, FuelType.DIESEL, BodyType.SUV,
                TransmissionType.AUTOMATIC, 2018, 223332, 5000, 80000, 80000,
                20, 25
        ));
        chrisDealer.addVehicle(new Vehicle("BMW","328i","1221343343322","/images/2017bmw328i/bmw.jpeg",
                "blue", "white", WheelDrive.RWD ,CarCondition.NEW, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2019, 223332, 5000, 40000, 40000,
                22, 30
        ));
        chrisDealer.addVehicle(new Vehicle("BMW","328i","1221343343322","/images/2017bmw328i/bmw.jpeg",
                "blue", "white", WheelDrive.RWD ,CarCondition.NEW, FuelType.GASOLINE, BodyType.SEDAN,
                    TransmissionType.AUTOMATIC, 2017, 223332, 5000, 40000, 40000,
                    22, 30
                ));
        chrisDealer.addVehicle(new Vehicle("Merdedes-Benz","C-class Coupe","1221343343322","/images/2016mercedesCclass/mercedes.jpeg",
                "black", "black", WheelDrive.RWD ,CarCondition.NEW, FuelType.GASOLINE, BodyType.COUPE,
                TransmissionType.AUTOMATIC, 2018, 223332, 5000, 50000, 50000,
                25, 30
        ));
        chrisDealer.addVehicle(new Vehicle("Merdedes-Benz","C-class Coupe","1221343343322","/images/2016mercedesCclass/mercedes.jpeg",
                "black", "black", WheelDrive.RWD ,CarCondition.NEW, FuelType.GASOLINE, BodyType.COUPE,
                TransmissionType.AUTOMATIC, 2016, 223332, 5000, 50000, 50000,
                25, 30
        ));
        chrisDealer.addVehicle(new Vehicle("BMW","328i","1221343343322","/images/2017bmw328i/bmw.jpeg",
                "blue", "white", WheelDrive.RWD ,CarCondition.USED, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2014, 223332, 5000, 40000, 40000,
                22, 30
        ));
        chrisDealer.addVehicle(new Vehicle("BMW","328i","1221343343322","/images/2017bmw328i/bmw.jpeg",
                "blue", "white", WheelDrive.RWD ,CarCondition.USED, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2014, 223332, 5000, 35000, 35000,
                22, 30
        ));
        chrisDealer.addVehicle(new Vehicle("BMW","535i","1221343343322","/images/2018bmw535i/2018bmw535i.jpeg",
                "white", "beige", WheelDrive.RWD ,CarCondition.USED, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2015, 223332, 5000, 40000, 40000,
                20, 25
        ));
        chrisDealer.addVehicle(new Vehicle("Merdedes-Benz","C-class Coupe","1221343343322","/images/2016mercedesCclass/mercedes.jpeg",
                "black", "black", WheelDrive.RWD ,CarCondition.USED, FuelType.GASOLINE, BodyType.COUPE,
                TransmissionType.AUTOMATIC, 2016, 223332, 5000, 50000, 50000,
                25, 30
        ));
        chrisDealer.addVehicle(new Vehicle("Mercedes-Benz","G63","1221343343322","/images/2017mercedes-benzg63/2017mercedes-benzg63.jpeg",
                "orange", "black", WheelDrive.AWD ,CarCondition.USED, FuelType.DIESEL, BodyType.SUV,
                TransmissionType.AUTOMATIC, 2015, 223332, 5000, 80000, 80000,
                20, 25
        ));
        chrisDealer.addVehicle(new Vehicle("Mercedes-Benz","G63","1221343343322","/images/2017mercedes-benzg63/2017mercedes-benzg63.jpeg",
                "orange", "black", WheelDrive.AWD ,CarCondition.USED, FuelType.DIESEL, BodyType.SUV,
                TransmissionType.AUTOMATIC, 2017, 223332, 5000, 80000, 80000,
                20, 25
        ));
        this.dealerRepo.save(chrisDealer);
    }
}
