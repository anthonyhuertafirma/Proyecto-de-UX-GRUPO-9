package com.smtaste.restaurant.service;

import com.smtaste.restaurant.dto.ProductoCarrito;
import com.smtaste.restaurant.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {
    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public List<ProductoCarrito> findAll(List<String> productosId) {
        List<Long> productosIdLong = productosId.stream()
                                                    .map(Long::parseLong)
                                                    .toList();

        try {
            List<Object[]> productosCrudo = productoRepository.findAllProductoCarrito(productosIdLong);

            return productosCrudo.stream().map(
                    producto -> new ProductoCarrito(
                    (Integer) producto[0],
                    (String) producto[1],
                    (String) producto[2],
                    (String) producto[3],
                    (String) producto[4]
            )).toList();
        } catch (IllegalStateException e) {
            return null;
        }
    }
}
