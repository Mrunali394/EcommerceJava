@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests()
                .anyRequest().permitAll() // Allow *everything*
            .and()
            .httpBasic().disable(); // Optional: fully disable auth

        return http.build();
    }
}
