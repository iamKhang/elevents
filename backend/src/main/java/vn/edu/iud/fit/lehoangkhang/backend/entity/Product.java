package vn.edu.iud.fit.lehoangkhang.backend.entity;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;
import vn.edu.iud.fit.lehoangkhang.backend.enums.Category;

@Entity
@Table(name = "products")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Product {
    @Id
    @UuidGenerator
    @Column(name = "product_id")
    private String productId;

    @Column(nullable = false)
    private String name;

    private String description;

    @Column(name = "main_image_url" ,nullable = false)
    private String mainImageUrl;

    @Column(name = "sub_image_url", nullable = false)
    private String subImageUrl;

    private String sizeChartUrl;

    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false)
    private Category category;

    @ManyToMany(mappedBy = "products")
    private Set<ProductCollection> collections;

    @Override
    public String toString() {
        return "Product{" +
                "productId='" + productId + '\'' +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", mainImageUrl='" + mainImageUrl + '\'' +
                ", subImageUrl='" + subImageUrl + '\'' +
                ", sizeChartUrl='" + sizeChartUrl + '\'' +
                ", category=" + category +
                '}';
    }
}
