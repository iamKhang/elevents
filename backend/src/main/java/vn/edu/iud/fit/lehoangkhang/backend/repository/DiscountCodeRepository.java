package vn.edu.iud.fit.lehoangkhang.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iud.fit.lehoangkhang.backend.entity.DiscountCode;

@Repository
public interface DiscountCodeRepository extends JpaRepository<DiscountCode, String> {
}
