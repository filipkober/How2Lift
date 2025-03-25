package com.example.backend.controller;

import com.example.backend.exception.NotVideoException;
import com.example.backend.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.util.Objects;

@Controller
@RequestMapping("/videos")
public class VideoController {
    private final StorageService storageService;

    @Autowired
    public VideoController(StorageService storageService) {
        this.storageService = storageService;
    }

    @RequestMapping("/{filename:.+}")
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) throws IOException {

        var extension = filename.substring(filename.lastIndexOf('.') + 1);
        if(!extension.equals("mp4"))
            return ResponseEntity.badRequest().build();

        var file = storageService.loadAsResource(filename);

        if(file == null)
            return ResponseEntity.notFound().build();

        var fileType = Objects.requireNonNull(file.getFilename()).substring(file.getFilename().lastIndexOf('.') + 1);
        if(!fileType.equals("mp4"))
            throw new NotVideoException("File is not a video");

        var length = file.contentLength();

        return ResponseEntity.status(HttpStatus.PARTIAL_CONTENT)
                .header("Content-Type", "video/mp4")
                .header("Accept-Ranges", "bytes")
                .header("Content-Length", String.valueOf(length))
                .header("Content-Range", "bytes 0-" + (length - 1) + "/" + length)
                .body(file);
    }
}
