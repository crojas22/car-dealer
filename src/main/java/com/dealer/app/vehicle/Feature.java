package com.dealer.app.vehicle;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    private Vehicle vehicle;

    protected Feature() {
    }

    public Feature(String description) {
        this.description = description;
    }
}
