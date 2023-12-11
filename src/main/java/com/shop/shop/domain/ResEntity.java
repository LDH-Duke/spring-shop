package com.shop.shop.domain;

public class ResEntity {
    private boolean status;
    private String message;

    public ResEntity(boolean status, String message) {
        this.status = status;
        this.message = message;
    }

    public boolean isStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
}
