package com.example.eureka_client;


import java.util.Collections;
import java.util.stream.Collectors;
import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@EnableDiscoveryClient
@SpringBootApplication
public class EurekaClientApplication {
    public static final int PORT = 8081;

    public static void main(String[] args) {

        SpringApplication app = new SpringApplication(EurekaClientApplication.class);
        app.setDefaultProperties(Collections
                .singletonMap("server.port", PORT));
        app.run(args);
    }
    @Bean
        public CorsFilter corsFilter() {
            final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
            final CorsConfiguration config = new CorsConfiguration();
            config.setAllowCredentials(true);
            config.setAllowedOrigins(Collections.singletonList("*"));
            config.setAllowedHeaders(Collections.singletonList("*"));
            config.setAllowedMethods(Arrays.stream(HttpMethod.values()).map(HttpMethod::name).collect(Collectors.toList()));
            source.registerCorsConfiguration("/**", config);
            return new CorsFilter(source);
        }
}
