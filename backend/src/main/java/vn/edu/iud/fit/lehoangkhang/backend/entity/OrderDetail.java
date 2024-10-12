package vn.edu.iud.fit.lehoangkhang.backend.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UuidGenerator;

import java.math.BigDecimal;

@Entity
@Table(name = "order_details")
public class OrderDetail {

    @Id
    @UuidGenerator
    @Column(name = "order_detail_id")
    private String orderDetailId;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_variant_id")
    private ProductVariant productVariant;

    @Column(nullable = false, name = "quantity")
    private Integer quantity;

    @Column(nullable = false, name = "price_at_order_time")
    private BigDecimal priceAtOrderTime;

    @Column(name = "discount_percentage")
    private BigDecimal discountPercentage;

    @Override
    public String toString() {
        return "OrderDetail{" +
                "orderDetailId='" + orderDetailId + '\'' +
                ", order=" + order +
                ", productVariant=" + productVariant +
                ", quantity=" + quantity +
                ", priceAtOrderTime=" + priceAtOrderTime +
                ", discountPercentage=" + discountPercentage +
                '}';
    }
}