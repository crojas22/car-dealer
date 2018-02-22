package com.dealer.app.appointment;

import com.dealer.app.vehicle.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestDriveService {
    private final TestDriveRepo testDriveRepo;
    private final VehicleService vehicleService;

    @Autowired
    public TestDriveService(TestDriveRepo testDriveRepo,
                            VehicleService vehicleService) {
        this.testDriveRepo = testDriveRepo;
        this.vehicleService = vehicleService;
    }

    public void createAppointment(TestDrive testDrive,
                                  Integer id) {
        testDrive.setVehicleInterested(this.vehicleService.getVehicle(id));
        this.testDriveRepo.save(testDrive);
    }
}
