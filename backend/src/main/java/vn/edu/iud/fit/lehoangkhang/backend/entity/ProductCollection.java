package vn.edu.iud.fit.lehoangkhang.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "collections")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductCollection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "collection_id")
    private String collectionId;

    @Column(nullable = false, name = "collection_name")
    private String collectionName;

    private String description;

    @ManyToMany
    @JoinTable(
            name = "product_collections",
            joinColumns = @JoinColumn(name = "collection_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private Set<Product> products;


    @Override
    public String toString() {
        return "ProductCollection{" +
                "collectionId='" + collectionId + '\'' +
                ", collectionName='" + collectionName + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}