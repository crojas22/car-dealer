package com.dealer.app.vehicle;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepo extends PagingAndSortingRepository<Vehicle, Integer> {

    Page<Vehicle> getVehicleByCarConditionOrderByYearDesc(CarCondition carCondition,Pageable pageable);

}
