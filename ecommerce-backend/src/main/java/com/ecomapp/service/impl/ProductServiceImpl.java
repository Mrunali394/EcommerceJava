package com.ecomapp.service.impl;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<ProductResponse> getAllProducts() {
        return productRepository.findAll().stream().map(this::mapToResponse).collect(Collectors.toList());
    }

    @Override
    public ProductResponse getProductById(Long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        return mapToResponse(product);
    }

    @Override
    public ProductResponse saveProduct(ProductRequest request) {
        Category category = categoryRepository.findById(request.categoryId).orElseThrow(() -> new RuntimeException("Category not found"));
        Product product = new Product();
        product.setName(request.name);
        product.setDescription(request.description);
        product.setPrice(request.price);
        product.setImageUrl(request.imageUrl);
        product.setCategory(category);
        return mapToResponse(productRepository.save(product));
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    private ProductResponse mapToResponse(Product product) {
        ProductResponse response = new ProductResponse();
        response.id = product.getId();
        response.name = product.getName();
        response.description = product.getDescription();
        response.price = product.getPrice();
        response.imageUrl = product.getImageUrl();
        response.categoryName = product.getCategory().getName();
        return response;
    }
}
