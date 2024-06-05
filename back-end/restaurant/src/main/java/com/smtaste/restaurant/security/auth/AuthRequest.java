package com.smtaste.restaurant.security.auth;

public class AuthRequest {
    private String email;
    private String contrasena;

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getContrasena() {
        return contrasena;
    }
}
