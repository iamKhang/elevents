package vn.edu.iud.fit.lehoangkhang.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iud.fit.lehoangkhang.backend.entity.ProductCollection;

@Repository
public interface ProductCollectionRepository extends JpaRepository<ProductCollection, String> {
}
