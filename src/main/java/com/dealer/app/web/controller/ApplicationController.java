package com.dealer.app.web.controller;

import com.dealer.app.application.TradeIn;
import com.dealer.app.application.TradeInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.Valid;

@Controller
@RequestMapping(path = "/api/v1")
public class ApplicationController {

    private final TradeInService tradeInService;

    @Autowired
    public ApplicationController(TradeInService tradeInService) {
        this.tradeInService = tradeInService;
    }

    @RequestMapping(value = "/application/trade-in", method = RequestMethod.POST)
    public ResponseEntity<Void> createTradeIn(@Valid @RequestBody TradeIn tradeIn) {
        try {
            this.tradeInService.createTradeInApplication(tradeIn);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
