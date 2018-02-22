package com.dealer.app.web.controller;

import com.dealer.app.appointment.TestDrive;
import com.dealer.app.appointment.TestDriveService;
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
public class AppointmentController {
    private final TestDriveService testDriveService;

    @Autowired
    public AppointmentController(TestDriveService testDriveService) {
        this.testDriveService = testDriveService;
    }

    @RequestMapping(value = "/appointment/testdrive/{id}", method = RequestMethod.POST)
    public ResponseEntity<Void> createTestDrive(@Valid @RequestBody TestDrive testDrive,
                                                @PathVariable Integer id) {
        try {
            this.testDriveService.createAppointment(testDrive, id);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


}
