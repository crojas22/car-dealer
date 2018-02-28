package com.dealer.app.web.controller;

import com.dealer.app.message.Message;
import com.dealer.app.message.MessageService;
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
public class MessageController {

    private final MessageService inquiriesService;
    private final VehicleService vehicleService;

    @Autowired
    public MessageController(MessageService inquiriesService, VehicleService vehicleService) {
        this.inquiriesService = inquiriesService;
        this.vehicleService = vehicleService;
    }

    @RequestMapping(value = "/message/inquiry/{id}", method = RequestMethod.POST)
    public ResponseEntity<Void> createMessage(@Valid @RequestBody Message message, @PathVariable Integer id) {
        try {
            this.inquiriesService.createMessage(message, this.vehicleService.getVehicle(id));
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
