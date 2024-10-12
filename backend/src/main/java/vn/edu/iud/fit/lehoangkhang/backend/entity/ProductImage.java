package vn.edu.iud.fit.lehoangkhang.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "product_images")
public class ProductImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer imageId;

    @ManyToOne
    @JoinColumn(name = "product_variant_id")
    private ProductVariant productVariant;

    @Column(nullable = false)
    private String imageUrl;

    @Override
    public String toString() {
        return "ProductImage{" +
                "imageId=" + imageId +
                ", productVariant=" + productVariant +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
