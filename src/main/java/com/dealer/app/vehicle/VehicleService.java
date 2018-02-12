package com.dealer.app.vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {
    private final VehicleRepo vehicleRepo;

    @Autowired
    public VehicleService(VehicleRepo vehicleRepo) {
        this.vehicleRepo = vehicleRepo;
    }

    public Page<Vehicle> getVehicleByCondition(CarCondition carCondition,Pageable pageable) {
        return this.vehicleRepo.getVehicleByCarConditionOrderByYearDesc(carCondition,pageable);
    }
}
