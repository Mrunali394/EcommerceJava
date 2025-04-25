package com.ecomapp.controller;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping
    public List<Cart> getAllCarts() {
        return cartService.getAllCarts();
    }

    @GetMapping("/{id}")    
    public ResponseEntity<Cart> getCartById(@PathVariable Long id) {
        return ResponseEntity.ok(cartService.getCartById(id));
    }

    @PostMapping
    public ResponseEntity<Cart> addCart(@RequestBody CartRequest request) { 
        return ResponseEntity.ok(cartService.saveCart(request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCart(@PathVariable Long id) {
        cartService.deleteCart(id); 
        return ResponseEntity.ok().build();
    }   

}
