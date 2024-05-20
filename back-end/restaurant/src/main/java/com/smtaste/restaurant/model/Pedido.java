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
@Table(name = "pedido")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String estado;
    private String fechaPago;
    private String ubicacion;
    private Double precio;
    @OneToMany(mappedBy = "pedido")
    @JsonIgnore
    private List<ProductoPedido> pedidos;
    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;
}
