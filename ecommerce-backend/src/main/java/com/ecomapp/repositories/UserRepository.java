package com.ecomapp.repositories;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}