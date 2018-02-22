package com.dealer.app.inquiry;

import com.dealer.app.vehicle.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    private final MessageRepo messageRepo;

    @Autowired
    public MessageService(MessageRepo messageRepo) {
        this.messageRepo = messageRepo;
    }

    public void createMessage(Message message, Vehicle vehicle) {
        message.setVehicleInquiringAbout(vehicle);
        this.messageRepo.save(message);
    }
}
