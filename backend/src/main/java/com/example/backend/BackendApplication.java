package com.example.backend;

import com.example.backend.properties.StorageProperties;
import com.example.backend.service.StorageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class BackendApplication {

    public static void main(String[] args) {

        SpringApplication.run(BackendApplication.class, args);

        System.out.println("""
                  _   _               ____  _     _  __ _  \s
                 | | | | _____      _|___ \\| |   (_)/ _| |_\s
                 | |_| |/ _ \\ \\ /\\ / / __) | |   | | |_| __|
                 |  _  | (_) \\ V  V / / __/| |___| |  _| |_\s
                 |_| |_|\\___/ \\_/\\_/ |_____|_____|_|_|  \\__|
                                                           \s
                
                """);
    }

    @Bean
    CommandLineRunner init(StorageService storageService) {
        return (args) -> {
//            storageService.deleteAll();
            storageService.init();
        };
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*");
            }
        };
    }

}
