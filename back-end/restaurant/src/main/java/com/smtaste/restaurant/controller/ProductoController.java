package com.smtaste.restaurant.controller;

import com.smtaste.restaurant.dto.ProductoMenuResponse;
import com.smtaste.restaurant.model.Producto;
import com.smtaste.restaurant.service.ProductoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity<Producto> addProducto(@RequestBody ProductoMenuResponse producto) {
        Producto newProducto = productoService.saveProducto(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(newProducto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Producto> updateProducto(@PathVariable Long id, @RequestBody ProductoMenuResponse productoDetails) {
        log.info("Actualizar producto con nombre: {}", productoDetails.nombre());
        Producto updatedProducto = productoService.updateProducto(id, productoDetails);
        return ResponseEntity.status(HttpStatus.OK).body(updatedProducto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProducto(@PathVariable Long id) {
        productoService.deleteProducto(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
