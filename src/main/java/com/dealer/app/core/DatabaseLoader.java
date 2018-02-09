package com.dealer.app.core;

import com.dealer.app.dealer.Dealer;
import com.dealer.app.dealer.DealerRepo;
import com.dealer.app.vehicle.*;
import com.dealer.app.vehicle.enums.CarManufacturer;
import com.dealer.app.vehicle.enums.CarModel;
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

        Vehicle vehicle = new Vehicle(CarManufacturer.BMW.toString(), CarModel.BMWFIVE.toString(),"1221343343322",
                "/images/2018bmw535i/2018bmw535i.jpeg", "/images/2018bmw535i/bmwfront.jpeg",
                "/images/2018bmw535i/bmwinside.jpeg", "/images/2018bmw535i/bmwside.jpeg",
                ExteriorColor.WHITE, InteriorColor.BEIGE, WheelDrive.RWD ,CarCondition.NEW, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2018, 223332, 5000, 60000, 60000,
                20, 25);

        vehicle.addFeatures(new Feature("Bluetooth"));
        vehicle.addFeatures(new Feature("MP3 interface"));
        vehicle.addFeatures(new Feature("Alloy wheels"));
        vehicle.addFeatures(new Feature("Navigation system"));
        vehicle.addFeatures(new Feature("Sports package"));
        vehicle.addFeatures(new Feature("Parking sensors"));
        vehicle.addFeatures(new Feature("Panoramic roof"));
        vehicle.addFeatures(new Feature("Auxiliary heating"));

        chrisDealer.addVehicle(vehicle);

        Vehicle vehicle1 = new Vehicle(CarManufacturer.BMW.toString(), CarModel.BMWFIVE.toString(),"1221343343322",
                "/images/2018bmw535i/2018bmw535i.jpeg", "/images/2018bmw535i/bmwfront.jpeg",
                "/images/2018bmw535i/bmwinside.jpeg", "/images/2018bmw535i/bmwside.jpeg",
                ExteriorColor.WHITE, InteriorColor.BLACK, WheelDrive.RWD ,CarCondition.NEW, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2018, 223332, 5000, 60000, 60000,
                20, 25
        );

        vehicle1.addFeatures(new Feature("Bluetooth"));
        vehicle1.addFeatures(new Feature("MP3 interface"));
        vehicle1.addFeatures(new Feature("Alloy wheels"));
        vehicle1.addFeatures(new Feature("Navigation system"));
        vehicle1.addFeatures(new Feature("Sports package"));
        vehicle1.addFeatures(new Feature("Parking sensors"));
        vehicle1.addFeatures(new Feature("Panoramic roof"));
        vehicle1.addFeatures(new Feature("Auxiliary heating"));

        chrisDealer.addVehicle(vehicle1);

        Vehicle vehicle2 = new Vehicle(CarManufacturer.BMW.toString(), CarModel.BWMTHREE.toString(),"1221343343322",
                "/images/2017bmw328i/bmw.jpeg", "/images/2017bmw328i/2017bmw328ifront.jpeg",
                "/images/2017bmw328i/2017bmw328iside.jpeg", "/images/2017bmw328i/bmwinterior.jpeg",
                ExteriorColor.BLUE, InteriorColor.BLACK, WheelDrive.RWD ,CarCondition.NEW, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2019, 223332, 5000, 40000, 40000,
                22, 30
        );

        vehicle2.addFeatures(new Feature("Bluetooth"));
        vehicle2.addFeatures(new Feature("MP3 interface"));
        vehicle2.addFeatures(new Feature("Alloy wheels"));
        vehicle2.addFeatures(new Feature("Navigation system"));
        vehicle2.addFeatures(new Feature("Sports package"));
        vehicle2.addFeatures(new Feature("Parking sensors"));
        vehicle2.addFeatures(new Feature("Panoramic roof"));

        chrisDealer.addVehicle(vehicle2);

        Vehicle vehicle3 = new Vehicle(CarManufacturer.BMW.toString(), CarModel.BWMTHREE.toString(),"1221343343322",
                "/images/2017bmw328i/bmw.jpeg","/images/2017bmw328i/2017bmw328ifront.jpeg",
                "/images/2017bmw328i/2017bmw328iside.jpeg", "/images/2017bmw328i/bmwinterior.jpeg",
                ExteriorColor.BLUE, InteriorColor.GREY, WheelDrive.RWD ,CarCondition.NEW, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2017, 223332, 5000, 40000, 40000,
                22, 30
        );

        vehicle3.addFeatures(new Feature("Bluetooth"));
        vehicle3.addFeatures(new Feature("MP3 interface"));
        vehicle3.addFeatures(new Feature("Alloy wheels"));
        vehicle3.addFeatures(new Feature("Navigation system"));
        vehicle3.addFeatures(new Feature("Sports package"));

        chrisDealer.addVehicle(vehicle3);

        Vehicle vehicle4 = new Vehicle(CarManufacturer.MERCEDES.toString(), CarModel.MERCEDESC.toString(),"1221343343322",
                "/images/2016mercedesCclass/mercedes.jpeg", "/images/2016mercedesCclass/mercedezfront.jpeg",
                "/images/2016mercedesCclass/mercedezinterior.jpeg","/images/2016mercedesCclass/mercedezrear.jpeg",
                ExteriorColor.BLACK, InteriorColor.GREY, WheelDrive.RWD ,CarCondition.NEW, FuelType.GASOLINE, BodyType.COUPE,
                TransmissionType.AUTOMATIC, 2018, 223332, 5000, 50000, 50000,
                25, 30
        );

        vehicle4.addFeatures(new Feature("Sports package"));
        vehicle4.addFeatures(new Feature("Parking sensors"));
        vehicle4.addFeatures(new Feature("Panoramic roof"));
        vehicle4.addFeatures(new Feature("Auxiliary heating"));

        chrisDealer.addVehicle(vehicle4);

        Vehicle vehicle5 = new Vehicle(CarManufacturer.MERCEDES.toString(), CarModel.MERCEDESC.toString(),"1221343343322",
                "/images/2016mercedesCclass/mercedes.jpeg","/images/2016mercedesCclass/mercedezfront.jpeg",
                "/images/2016mercedesCclass/mercedezinterior.jpeg","/images/2016mercedesCclass/mercedezrear.jpeg",
                ExteriorColor.BLACK, InteriorColor.BEIGE, WheelDrive.RWD ,CarCondition.NEW, FuelType.GASOLINE, BodyType.COUPE,
                TransmissionType.AUTOMATIC, 2016, 223332, 5000, 50000, 50000,
                25, 30
        );

        vehicle5.addFeatures(new Feature("MP3 interface"));
        vehicle5.addFeatures(new Feature("Alloy wheels"));
        vehicle5.addFeatures(new Feature("Navigation system"));
        vehicle5.addFeatures(new Feature("Sports package"));
        vehicle5.addFeatures(new Feature("Parking sensors"));
        vehicle5.addFeatures(new Feature("Panoramic roof"));

        chrisDealer.addVehicle(vehicle5);

        Vehicle vehicle6 = new Vehicle(CarManufacturer.BMW.toString(), CarModel.BWMTHREE.toString(),"1221343343322",
                "/images/2017bmw328i/bmw.jpeg", "/images/2017bmw328i/2017bmw328ifront.jpeg",
                "/images/2017bmw328i/2017bmw328iside.jpeg", "/images/2017bmw328i/bmwinterior.jpeg",
                ExteriorColor.BLUE, InteriorColor.WHITE, WheelDrive.RWD ,CarCondition.USED, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2014, 223332, 5000, 40000, 40000,
                22, 30
        );

        vehicle6.addFeatures(new Feature("Bluetooth"));
        vehicle6.addFeatures(new Feature("MP3 interface"));
        vehicle6.addFeatures(new Feature("Alloy wheels"));
        vehicle6.addFeatures(new Feature("Navigation system"));
        vehicle6.addFeatures(new Feature("Sports package"));

        chrisDealer.addVehicle(vehicle6);

        Vehicle vehicle7 = new Vehicle(CarManufacturer.BMW.toString(), CarModel.BWMTHREE.toString(),"1221343343322",
                "/images/2017bmw328i/bmw.jpeg", "/images/2017bmw328i/2017bmw328ifront.jpeg",
                "/images/2017bmw328i/2017bmw328iside.jpeg", "/images/2017bmw328i/bmwinterior.jpeg",
                ExteriorColor.BLUE, InteriorColor.BLACK, WheelDrive.RWD ,CarCondition.USED, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2014, 223332, 5000, 35000, 35000,
                22, 30
        );

        vehicle7.addFeatures(new Feature("MP3 interface"));
        vehicle7.addFeatures(new Feature("Alloy wheels"));
        vehicle7.addFeatures(new Feature("Navigation system"));

        chrisDealer.addVehicle(vehicle7);

        Vehicle vehicle8 = new Vehicle(CarManufacturer.BMW.toString(), CarModel.BMWFIVE.toString(),"1221343343322",
                "/images/2018bmw535i/2018bmw535i.jpeg", "/images/2018bmw535i/bmwfront.jpeg",
                "/images/2018bmw535i/bmwinside.jpeg", "/images/2018bmw535i/bmwside.jpeg",
                ExteriorColor.WHITE, InteriorColor.BEIGE, WheelDrive.RWD ,CarCondition.USED, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2015, 223332, 5000, 40000, 40000,
                20, 25
        );

        vehicle8.addFeatures(new Feature("MP3 interface"));
        vehicle8.addFeatures(new Feature("Alloy wheels"));
        vehicle8.addFeatures(new Feature("Navigation system"));

        chrisDealer.addVehicle(vehicle8);

        Vehicle vehicle9 = new Vehicle(CarManufacturer.MERCEDES.toString(), CarModel.MERCEDESC.toString(),"1221343343322",
                "/images/2016mercedesCclass/mercedes.jpeg", "/images/2016mercedesCclass/mercedezfront.jpeg",
                "/images/2016mercedesCclass/mercedezinterior.jpeg","/images/2016mercedesCclass/mercedezrear.jpeg",
                ExteriorColor.BLACK, InteriorColor.GREY, WheelDrive.RWD ,CarCondition.USED, FuelType.GASOLINE, BodyType.COUPE,
                TransmissionType.AUTOMATIC, 2016, 223332, 5000, 50000, 50000,
                25, 30
        );

        vehicle9.addFeatures(new Feature("MP3 interface"));
        vehicle9.addFeatures(new Feature("Alloy wheels"));
        vehicle9.addFeatures(new Feature("Navigation system"));

        chrisDealer.addVehicle(vehicle9);

        Vehicle vehicle10 = new Vehicle(CarManufacturer.BMW.toString(), CarModel.BMWFIVE.toString(),"1221343343322",
                "/images/2018bmw535i/2018bmw535i.jpeg", "/images/2018bmw535i/bmwfront.jpeg",
                "/images/2018bmw535i/bmwinside.jpeg", "/images/2018bmw535i/bmwside.jpeg",
                ExteriorColor.WHITE, InteriorColor.BEIGE, WheelDrive.RWD ,CarCondition.USED, FuelType.GASOLINE, BodyType.SEDAN,
                TransmissionType.AUTOMATIC, 2018, 223332, 5000, 60000, 60000,
                20, 25
        );

        vehicle10.addFeatures(new Feature("MP3 interface"));
        vehicle10.addFeatures(new Feature("Alloy wheels"));
        vehicle10.addFeatures(new Feature("Navigation system"));

        chrisDealer.addVehicle(vehicle10);

        this.dealerRepo.save(chrisDealer);
    }
}
