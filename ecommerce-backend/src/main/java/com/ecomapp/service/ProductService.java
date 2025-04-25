package com.ecomapp.service;

import java.util.List;
import com.ecomapp.dto.request.ProductRequest;
import com.ecomapp.dto.response.ProductResponse;

    public interface ProductService {
    List<ProductResponse> getAllProducts();
    ProductResponse getProductById(Long id);
    ProductResponse saveProduct(ProductRequest request);
    void deleteProduct(Long id);
}


