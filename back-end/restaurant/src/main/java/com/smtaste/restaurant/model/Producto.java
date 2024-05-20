package com.smtaste.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String url_foto;
    private String descripcion;
    private String categoria;
    private Integer cantidad;
    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private List<ProductoPedido> productos;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_restaurante")
    private Restaurante restaurante;
}
