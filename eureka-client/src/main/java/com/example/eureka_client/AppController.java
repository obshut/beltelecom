package com.example.eureka_client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import com.example.eureka_client.entities.Filial;
import com.example.eureka_client.entities.Tariff;
import com.example.eureka_client.entities.User;



import java.util.List;

@RestController
@RequestMapping("/api")
public class AppController {

    @Autowired
    private DiscoveryClient discoveryClient;

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/filials")
    public ResponseEntity<List<Filial>> getFilials() {
        String url = getServiceUrl("MICROSERVICES") + "/filials/find";
        ResponseEntity<List> response = restTemplate.postForEntity(url, new Filial(), List.class);
        return ResponseEntity.ok(response.getBody());
    }

    @GetMapping("/tariffs")
    public ResponseEntity<List<Tariff>> getTariffs() {
        String url = getServiceUrl("MICROSERVICES") + "/tariffs/find";
        ResponseEntity<List> response = restTemplate.postForEntity(url, new Tariff(), List.class);
        return ResponseEntity.ok(response.getBody());
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        String url = getServiceUrl("MICROSERVICES") + "/users/find";
        ResponseEntity<List> response = restTemplate.postForEntity(url, new User(), List.class);
        return ResponseEntity.ok(response.getBody());
    }

    private String getServiceUrl(String serviceName) {
        List<ServiceInstance> instances = discoveryClient.getInstances(serviceName);
        if (instances != null && !instances.isEmpty()) {
            return instances.get(0).getUri().toString();
        }
        return null;
    }
}

