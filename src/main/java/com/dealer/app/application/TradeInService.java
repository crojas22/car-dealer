package com.dealer.app.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TradeInService {

    private final TradeInRepo tradeInRepo;

    @Autowired
    public TradeInService(TradeInRepo tradeInRepo) {
        this.tradeInRepo = tradeInRepo;
    }

    public void createTradeInApplication(TradeIn tradeIn) {
        this.tradeInRepo.save(tradeIn);
    }
}
