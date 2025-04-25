package com.ecomapp.dto.response;

import java.util.List;

public class CartResponse {
    public Long id;
    public List<CartItemResponse> items;
    public double totalPrice;
}
