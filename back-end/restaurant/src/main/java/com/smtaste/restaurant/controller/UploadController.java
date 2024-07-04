package com.smtaste.restaurant.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/upload")
public class UploadController {

    @PostMapping
    public ResponseEntity<String> uploadImage(@RequestBody MultipartFile file) {
        String fileUrl = saveFileAndGetUrl(file);

        return ResponseEntity.ok(fileUrl);
    }

    private String saveFileAndGetUrl(MultipartFile file) {
        String fileName = file.getOriginalFilename();
        Path path = Paths.get("uploads/" + fileName);
        try {
            Files.copy(file.getInputStream(), path);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "http://localhost:8080/uploads/" + fileName;
    }
}
