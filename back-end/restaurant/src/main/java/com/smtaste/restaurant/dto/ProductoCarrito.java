package com.smtaste.restaurant.dto;

public record ProductoCarrito(
        Integer id,
        String nombre,
        String urlImagen,
        String descripcion,
        String nombreRestaurante
) {
}
