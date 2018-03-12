package com.dealer.app.message;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@RepositoryRestResource(exported = false)
public interface MessageRepo extends CrudRepository<Message, Integer> {
}
