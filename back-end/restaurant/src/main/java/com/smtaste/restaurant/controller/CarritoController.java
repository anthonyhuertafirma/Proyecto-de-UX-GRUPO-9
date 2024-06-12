package com.smtaste.restaurant.controller;

import com.smtaste.restaurant.dto.ProductoCarritoDto;
import com.smtaste.restaurant.service.ProductoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carrito")
@Slf4j
public class CarritoController {
    private final ProductoService productoService;

    public CarritoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @PostMapping
    public ResponseEntity<List<ProductoCarritoDto>> getItems(@RequestBody List<String> productosId) {
        var productoCarrito = productoService.findAll(productosId);

        if (productoCarrito.isEmpty()) {
            log.info("El carrito esta vacio");
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }

        log.info("El carrito es: {}", productoCarrito);
        return ResponseEntity.status(HttpStatus.OK).body(productoCarrito);
    }
}
