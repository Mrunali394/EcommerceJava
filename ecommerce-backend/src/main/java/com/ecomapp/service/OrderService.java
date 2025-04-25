package com.ecomapp.service;
import java.util.List;

public interface OrderService {
    OrderResponse placeOrder(OrderRequest request);
    List<OrderResponse> getOrdersByUserId(Long userId);
}
