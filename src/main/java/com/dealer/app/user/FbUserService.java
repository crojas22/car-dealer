package com.dealer.app.user;

import com.dealer.app.vehicle.Vehicle;
import com.dealer.app.vehicle.VehicleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class FbUserService {
    private final FbUserRepo fbUserRepo;
    private final VehicleRepo vehicleRepo;

    @Autowired
    public FbUserService(FbUserRepo fbUserRepo,
                         VehicleRepo vehicleRepo) {
        this.fbUserRepo = fbUserRepo;
        this.vehicleRepo = vehicleRepo;
    }

    public void createFbUser(FacebookUser user) {
        FacebookUser fbUser = this.fbUserRepo.findByEmail(user.getEmail());
        if (fbUser == null) {
            this.fbUserRepo.save(user);
        }
    }

    public void addToFavorites(Long userId, Integer id) {
        Vehicle vehicle = this.vehicleRepo.findOne(id);
        FacebookUser user = this.fbUserRepo.findOne(userId);
        vehicle.addFbUserFavorite(user);
        user.addToFavorites(vehicle);
        this.fbUserRepo.save(user);
    }

    public void removeFromFavorites(Long userId, Integer id) {
        Vehicle vehicle = this.vehicleRepo.findOne(id);
        FacebookUser user = this.fbUserRepo.findOne(userId);
        user.removeFromFavorites(vehicle);
        this.fbUserRepo.save(user);
    }

    public FacebookUser findFbUser(long id) {
        return this.fbUserRepo.findOne(id);
    }

    public Set<Vehicle> getFavorites(FacebookUser user) {
        return user.getFavorites();
    }
}
