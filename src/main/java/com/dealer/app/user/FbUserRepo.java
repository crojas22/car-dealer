package com.dealer.app.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(exported = false)
public interface FbUserRepo extends JpaRepository<FacebookUser, Long> {
    FacebookUser findByEmail(String username);
}