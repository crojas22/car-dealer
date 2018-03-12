package com.dealer.app.web.controller;

import com.dealer.app.user.FacebookUser;
import com.dealer.app.user.FbUserService;
import com.dealer.app.vehicle.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Set;

@Controller
@RequestMapping(path = "/api/v1")
public class FbController {
    private final FbUserService fbUserService;

    @Autowired
    public FbController(FbUserService fbUserService) {
        this.fbUserService = fbUserService;
    }

    @RequestMapping(value = "/login/fb", method = RequestMethod.POST)
    public ResponseEntity<Set<Vehicle>> getUserInfo(@RequestBody FacebookUser user) {
        this.fbUserService.createFbUser(user);
        return new ResponseEntity<>(this.fbUserService.getFavorites(this.fbUserService.findFbUser(user.getId())), HttpStatus.OK);
    }

    @RequestMapping(value = "/add/favorite/{userId}/{id}", method = RequestMethod.POST)
    public ResponseEntity<Set<Vehicle>> addToFavorites(@PathVariable Long userId, @PathVariable Integer id) {
        this.fbUserService.addToFavorites(userId, id);
        return new ResponseEntity<>(this.fbUserService.getFavorites(this.fbUserService.findFbUser(userId)), HttpStatus.OK);
    }

    @RequestMapping(value = "/remove/favorite/{userId}/{id}", method = RequestMethod.POST)
    public ResponseEntity<Set<Vehicle>> removeFromFavorites(@PathVariable Long userId, @PathVariable Integer id) {
        this.fbUserService.removeFromFavorites(userId, id);
        return new ResponseEntity<>(this.fbUserService.getFavorites(this.fbUserService.findFbUser(userId)), HttpStatus.OK);
    }
}
