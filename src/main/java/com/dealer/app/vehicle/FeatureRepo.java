package com.dealer.app.vehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
public interface FeatureRepo extends JpaRepository<Feature, Integer> {
}
