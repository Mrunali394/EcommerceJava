package com.ecomapp.service.impl;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public CartResponse getCartByUserId(Long userId) {
        Cart cart = cartRepository.findById(userId).orElse(new Cart(userId));
        return mapToResponse(cart);
    }

    @Override
    public CartResponse addToCart(CartRequest request) {
        Product product = productRepository.findById(request.productId).orElseThrow();
        Cart cart = cartRepository.findById(request.userId).orElse(new Cart(request.userId));

        cart.addItem(product, request.quantity);
        return mapToResponse(cartRepository.save(cart));
    }

    @Override
    public void removeFromCart(Long userId, Long productId) {
        Cart cart = cartRepository.findById(userId).orElseThrow();
        cart.removeItem(productId);
        cartRepository.save(cart);
    }

    private CartResponse mapToResponse(Cart cart) {
        // Simplified mapper - implement real transformation logic here
        return new CartResponse(); 
    }
}
