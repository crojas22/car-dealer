package com.dealer.app.vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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

    public <T> List<String> enumToString(T[] array) {
        return Arrays.stream(array)
                .map(Object::toString)
                .collect(Collectors.toList());
    }
}
