package vn.edu.iud.fit.lehoangkhang.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iud.fit.lehoangkhang.backend.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, String> {

}
