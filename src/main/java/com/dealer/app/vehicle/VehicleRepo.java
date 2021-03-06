package com.dealer.app.vehicle;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin("https://dealer-back.herokuapp.com")
@RepositoryRestResource(excerptProjection = VehicleProjection.class)
public interface VehicleRepo extends PagingAndSortingRepository<Vehicle, Integer>, QueryDslPredicateExecutor<Vehicle> {

    Page<Vehicle> getVehicleByCarConditionOrderByYearDesc(CarCondition carCondition,Pageable pageable);
}
