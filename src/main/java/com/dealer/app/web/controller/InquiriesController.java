package com.dealer.app.web.controller;

import com.dealer.app.customer.CustomerInquiries;
import com.dealer.app.customer.CustomerInquiriesService;
import com.dealer.app.vehicle.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.Valid;

@Controller
@RequestMapping(path = "/api/v1")
public class InquiriesController {

    private final CustomerInquiriesService inquiriesService;
    private final VehicleService vehicleService;

    @Autowired
    public InquiriesController(CustomerInquiriesService inquiriesService, VehicleService vehicleService) {
        this.inquiriesService = inquiriesService;
        this.vehicleService = vehicleService;
    }

    @RequestMapping(value = "/add/inquiries/{id}", method = RequestMethod.POST)
    public ResponseEntity<Void> createInquiries(@Valid @RequestBody CustomerInquiries inquiries, @PathVariable Integer id) {
        try {
            this.inquiriesService.createInquirie(inquiries, this.vehicleService.getVehicle(id));
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
