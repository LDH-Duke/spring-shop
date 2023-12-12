package com.shop.shop.domain;

public class ResEntity {
    private int status;
    private String message;

    public ResEntity(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public int getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
}
