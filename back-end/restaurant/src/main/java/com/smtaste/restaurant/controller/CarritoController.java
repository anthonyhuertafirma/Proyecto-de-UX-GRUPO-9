package com.smtaste.restaurant.controller;

import com.smtaste.restaurant.dto.ProductoCarrito;
import com.smtaste.restaurant.service.ProductoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carrito")
public class CarritoController {
    private final ProductoService productoService;

    public CarritoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @PostMapping
    public ResponseEntity<List<ProductoCarrito>> getItems(@RequestBody List<String> productosId) {
        var productoCarrito = productoService.findAll(productosId);

        if (productoCarrito.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(productoCarrito);
    }
}
