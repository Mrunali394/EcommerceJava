package com.ecomapp.dto.response;

import java.time.LocalDateTime;
import java.util.List;

public class OrderResponse {
    public Long orderId;
    public Long userId;
    public List<OrderItemResponse> items;
    public String shippingAddress;
    public double totalAmount;
    public LocalDateTime orderDate;
}
