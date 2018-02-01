package com.dealer.app.vehicle;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Feature {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String description;
    @ManyToOne
    private Vehicle vehicle;

    protected Feature() {
    }

    public Feature(String description) {
        this.description = description;
    }
}
