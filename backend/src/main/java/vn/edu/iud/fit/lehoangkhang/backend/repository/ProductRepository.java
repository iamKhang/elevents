package vn.edu.iud.fit.lehoangkhang.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iud.fit.lehoangkhang.backend.entity.Product;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {


    List<Product> findByName(String name);

    Product findByCollections_CollectionId(String collectionId);
}
