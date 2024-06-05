package com.smtaste.restaurant.security.auth;

import com.smtaste.restaurant.model.Usuario;
import com.smtaste.restaurant.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
public class AuthController {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody AuthRequest authRequest) {
        Optional<Usuario> usuarioOptional = usuarioRepository.findByEmail(authRequest.getEmail());
        Map<String, String> response = new HashMap<>();

        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            if (usuario.getContrasena().equals(authRequest.getContrasena())) {
                response.put("message", "Login successful");
                response.put("user", usuario.getNombre());
            } else {
                response.put("message", "Invalid password");
            }
        } else {
            response.put("message", "User not found");
        }

        return response;
    }

}
