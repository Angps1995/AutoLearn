package com.autodesk.autolearn.models;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class Topic {
    private String id;
    private String name;
}