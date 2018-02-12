package com.dealer.app.web.controller;

import com.dealer.app.vehicle.BodyType;
import com.dealer.app.vehicle.CarCondition;
import com.dealer.app.vehicle.VehicleService;
import com.dealer.app.vehicle.enums.CarManufacturer;
import com.dealer.app.vehicle.enums.CarModel;
import com.dealer.app.vehicle.enums.CarYear;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(path = "/api/v1")
public class VehicleController {

    private final VehicleService vehicleService;

    @Autowired
    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @RequestMapping(value = "/home/inventory",method = RequestMethod.GET)
    public ResponseEntity<Map<String, Object>> getHomeInventory(Pageable pageable) {
        Map<String, Object> response = new HashMap<>();
        response.put("newVehicles", this.vehicleService.getVehicleByCondition(CarCondition.NEW,pageable));
        response.put("usedVehicles", this.vehicleService.getVehicleByCondition(CarCondition.USED,pageable));

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
