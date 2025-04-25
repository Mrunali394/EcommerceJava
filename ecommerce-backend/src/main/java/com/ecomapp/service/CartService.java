package com.ecomapp.service;

import com.ecomapp.dto.request.CartRequest;
import com.ecomapp.dto.response.CartResponse;   
import com.ecomapp.model.Cart;
import com.ecomapp.model.Product;
import com.ecomapp.model.User;
import com.ecomapp.repository.CartRepository;
import com.ecomapp.repository.ProductRepository;
import com.ecomapp.repository.UserRepository;   


public interface CartService {
    CartResponse getCartByUserId(Long userId);
    CartResponse addToCart(CartRequest request);
    void removeFromCart(Long userId, Long productId);
}

