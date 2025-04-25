package com.ecomapp.service;

public interface UserService {
    UserResponse register(UserRegisterRequest request);
    UserResponse login(UserLoginRequest request);
}



