package com.shop.shop.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Builder
public class ResDto<T> {
    private int code;
    private HttpStatus statusCode;
    private String message;
    private T data;

    public ResDto(int code, HttpStatus statusCode, String message) {
        this.code = code;
        this.statusCode = statusCode;
        this.message = message;
        this.data = null;
    }

    public static<T> ResDto<T> res(final int code, final HttpStatus statusCode, final String resultMsg) {
        return res(code, statusCode, resultMsg, null);
    }

    public static<T> ResDto<T> res(final int code, final HttpStatus statusCode, final String resultMsg, final T t) {
        return ResDto.<T>builder()
                .code(code)
                .statusCode(statusCode)
                .message(resultMsg)
                .data(t)
                .build();
    }
}

