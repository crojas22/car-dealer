package com.dealer.app.user;

import com.dealer.app.vehicle.Vehicle;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
public class FacebookUser {
    @Id
    private long id;
    private String name, email, accessToken;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "facebook_favorites_vehicles",
            joinColumns = @JoinColumn(name = "fb_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "vehicle_id", referencedColumnName = "id"))
    private Set<Vehicle> favorites;

    {
        favorites = new HashSet<>();
    }

    protected FacebookUser() {
    }

    public FacebookUser(String name, String email, String accessToken) {
        this.name = name;
        this.email = email;
        this.accessToken = accessToken;
    }

    public void addToFavorites(Vehicle vehicle) {
        favorites.add(vehicle);
    }

    public void removeFromFavorites(Vehicle vehicle) {
        favorites.remove(vehicle);
    }
}
