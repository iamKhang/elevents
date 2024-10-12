package vn.edu.iud.fit.lehoangkhang.backend.entity;

import jakarta.persistence.*;
import org.hibernate.engine.jdbc.Size;
import vn.edu.iud.fit.lehoangkhang.backend.enums.Color;

import java.math.BigDecimal;
import java.util.Set;

@Entity
@Table(name = "product_variants")
public class ProductVariant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer variantId;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(nullable = false, unique = true)
    private String sku;

    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false)
    private Color color;

    @Column(nullable = false)
    private BigDecimal price;

    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false)
    private Size size;

    @Column(nullable = false)
    private Integer quantity;

    private BigDecimal discountPercentage;

    @ElementCollection
    @CollectionTable(name = "product_images", joinColumns = @JoinColumn(name = "variant_id"))
    @Column(name = "image_url")
    private Set<String> productImages;

    @Override
    public String toString() {
        return "ProductVariant{" +
                "variantId=" + variantId +
                ", product=" + product +
                ", sku='" + sku + '\'' +
                ", color=" + color +
                ", price=" + price +
                ", size=" + size +
                ", quantity=" + quantity +
                ", discountPercentage=" + discountPercentage +
                ", productImages=" + productImages +
                '}';
    }
}