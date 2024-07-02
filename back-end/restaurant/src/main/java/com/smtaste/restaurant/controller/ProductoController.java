package com.smtaste.restaurant.controller;

import com.smtaste.restaurant.dto.ProductoMenuResponse;
import com.smtaste.restaurant.service.ProductoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@Slf4j
public class ProductoController {
    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @GetMapping
    public ResponseEntity<List<ProductoMenuResponse>> getProductos() {
        var productos = productoService.findAllProductosMenu();

        log.info("Lista de productos: {}", productos);

        return ResponseEntity.status(HttpStatus.OK).body(productos);
    }
    

}
