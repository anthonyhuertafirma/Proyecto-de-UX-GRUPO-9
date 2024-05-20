package com.smtaste.restaurant.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tarjeta_credito")
public class Tarjeta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombreTarjeta;
    private String clave;
    private String cvv;
    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

}
