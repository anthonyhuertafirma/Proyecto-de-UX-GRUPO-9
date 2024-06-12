package com.smtaste.restaurant.dto;

public record ProductoMenuResponse (
        Integer id,
        String nombre,
        String urlImagen,
        String descripcion,
        Integer cantidad
) {
}
