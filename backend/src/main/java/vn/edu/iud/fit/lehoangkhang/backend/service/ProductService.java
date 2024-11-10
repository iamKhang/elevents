package vn.edu.iud.fit.lehoangkhang.backend.service;

import vn.edu.iud.fit.lehoangkhang.backend.entity.Product;

import java.util.List;

public interface ProductService {

    List<Product> getProducts(int page, int size);
    Product getProductById(String id);
}

