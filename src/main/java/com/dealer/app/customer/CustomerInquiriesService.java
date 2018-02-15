package com.dealer.app.customer;

import com.dealer.app.vehicle.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerInquiriesService {

    private final CustomerInquiriesRepo customerInquiriesRepo;

    @Autowired
    public CustomerInquiriesService(CustomerInquiriesRepo customerInquiriesRepo) {
        this.customerInquiriesRepo = customerInquiriesRepo;
    }

    public void createInquirie(CustomerInquiries customerInquiries, Vehicle vehicle) {
        customerInquiries.setVehicleInquiringAbout(vehicle);
        this.customerInquiriesRepo.save(customerInquiries);
    }
}
