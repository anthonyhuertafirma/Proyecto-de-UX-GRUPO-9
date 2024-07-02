package com.smtaste.restaurant.service;

import com.smtaste.restaurant.dto.ProductoCarritoDto;
import com.smtaste.restaurant.dto.ProductoMenuResponse;
import com.smtaste.restaurant.model.Producto;
import com.smtaste.restaurant.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public List<ProductoCarritoDto> findAll(List<String> productosId) {
        List<Long> productosIdLong = productosId.stream().map(Long::parseLong).toList();

        try {
            List<Object[]> productosCrudo = productoRepository.findAllProductoCarrito(productosIdLong);
            return productosCrudo.stream().map(
                    producto -> new ProductoCarritoDto(
                            (Integer) producto[0],
                            (String) producto[1],
                            (String) producto[2],
                            (String) producto[3],
                            (String) producto[4],
                            (Float) producto[5]
                    )).toList();
        } catch (IllegalStateException e) {
            return null;
        }
    }

    public List<ProductoMenuResponse> findAllProductosMenu() {
        List<Object[]> productos = productoRepository.findAllProductosMenu();
        return productos.stream().map(
                producto -> new ProductoMenuResponse(
                        (Integer) producto[0],
                        (String) producto[1],
                        (String) producto[2],
                        (String) producto[3],
                        (Integer) producto[4],
                        (Float) producto[5]
                )
        ).toList();
    }

    public Producto saveProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    public Producto updateProducto(Long id, Producto productoDetails) {
        Optional<Producto> optionalProducto = productoRepository.findById(id);
        if (optionalProducto.isPresent()) {
            Producto producto = optionalProducto.get();
            producto.setNombre(productoDetails.getNombre());
            producto.setDescripcion(productoDetails.getDescripcion());
            producto.setCantidad(productoDetails.getCantidad());
            producto.setPrecio(productoDetails.getPrecio());
            producto.setUrl_foto(productoDetails.getUrl_foto());
            return productoRepository.save(producto);
        }
        throw new RuntimeException("Producto no encontrado");
    }

    public void deleteProducto(Long id) {
        productoRepository.deleteById(id);
    }
}
