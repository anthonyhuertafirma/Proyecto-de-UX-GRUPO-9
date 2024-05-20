package com.smtaste.restaurant.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String apellido;
    @Enumerated(EnumType.ORDINAL)
    private Rol rol;
    private String correo;
    private String contrasenia;
    @OneToMany(mappedBy = "usuario")
    private List<Pedido> pedidos;
    @OneToMany(mappedBy = "usuario")
    private List<Tarjeta> tarjetas;
}
