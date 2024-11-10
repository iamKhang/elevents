package vn.edu.iud.fit.lehoangkhang.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.iud.fit.lehoangkhang.backend.entity.Product;
import vn.edu.iud.fit.lehoangkhang.backend.service.ProductService;

@RestController
public class MyController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<Product> getProducts() {
        return ResponseEntity.ok(productService.getProducts(0, 10).get(0));
    }
}
