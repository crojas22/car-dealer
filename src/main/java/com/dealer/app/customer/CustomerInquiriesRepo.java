package com.dealer.app.customer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(exported = false)
public interface CustomerInquiriesRepo extends CrudRepository<CustomerInquiries, Integer> {
}
