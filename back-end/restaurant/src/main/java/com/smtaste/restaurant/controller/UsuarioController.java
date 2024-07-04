package com.smtaste.restaurant.controller;

import com.smtaste.restaurant.security.auth.AuthRequest;
import com.smtaste.restaurant.service.UsuarioService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/usuarios")
@Slf4j
public class UsuarioController {
    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> getUsernameByLogin(@RequestBody AuthRequest authRequest) {
        log.info("Intento de inicio de sesion: {}", authRequest.toString());
        String usuarioNombre = usuarioService.getUsuario(authRequest);
        Map<String, String> response = new HashMap<>();



        if (usuarioNombre == null) {
            response.put("message", "Usuario no encontrado");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        response.put("user", usuarioNombre);
        return ResponseEntity.ok(response);
    }
}
