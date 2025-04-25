package com.ecomapp.service.impl;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserResponse register(UserRegisterRequest request) {
        if (userRepository.findByEmail(request.email).isPresent()) {
            throw new RuntimeException("Email already exists.");
        }

        User user = new User();
        user.setName(request.name);
        user.setEmail(request.email);
        user.setPassword(request.password); // Use encoder in production
        userRepository.save(user);

        return mapToResponse(user);
    }

    @Override
    public UserResponse login(UserLoginRequest request) {
        User user = userRepository.findByEmail(request.email)
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
        if (!user.getPassword().equals(request.password)) {
            throw new RuntimeException("Invalid credentials");
        }
        return mapToResponse(user);
    }

    private UserResponse mapToResponse(User user) {
        UserResponse response = new UserResponse();
        response.id = user.getId();
        response.name = user.getName();
        response.email = user.getEmail();
        return response;
    }
}
