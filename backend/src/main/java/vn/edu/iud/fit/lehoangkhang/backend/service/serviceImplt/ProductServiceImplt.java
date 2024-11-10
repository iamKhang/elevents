package vn.edu.iud.fit.lehoangkhang.backend.service.serviceImplt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import vn.edu.iud.fit.lehoangkhang.backend.entity.Product;
import vn.edu.iud.fit.lehoangkhang.backend.repository.ProductRepository;
import vn.edu.iud.fit.lehoangkhang.backend.service.ProductService;

import java.util.List;

@Service
public class ProductServiceImplt implements ProductService {

    @Autowired
    private ProductRepository productRepository;


    @Override
    public List<Product> getProducts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findAll(pageable).getContent();
    }

    @Override
    public Product getProductById(String id) {
        return productRepository.findByCollections_CollectionId(id);
    }




}
