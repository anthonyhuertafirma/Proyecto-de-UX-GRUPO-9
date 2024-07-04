package com.smtaste.restaurant.service;

import com.smtaste.restaurant.repository.UsuarioRepository;
import com.smtaste.restaurant.security.auth.AuthRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public String getUsuario(AuthRequest authRequest) {
        Optional<String> usuarioNombre = usuarioRepository.findByLogin(authRequest.email(), authRequest.contrasena());

        return usuarioNombre.orElse(null);
    }
}
