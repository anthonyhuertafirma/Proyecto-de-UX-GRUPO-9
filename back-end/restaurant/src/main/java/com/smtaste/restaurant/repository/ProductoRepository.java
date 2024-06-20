package com.smtaste.restaurant.repository;

import com.smtaste.restaurant.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    @Query("SELECT p.id, p.nombre, p.url_foto , p.descripcion, r.nombre, p.precio " +
            "FROM Producto p JOIN p.restaurante r " +
            "WHERE p.id IN :ids")
    List<Object[]> findAllProductoCarrito(@Param("ids") List<Long> ids);

    @Query("SELECT p.id, p.nombre, p.url_foto, p.descripcion, p.cantidad, p.precio FROM Producto p")
    List<Object[]> findAllProductosMenu();
}
