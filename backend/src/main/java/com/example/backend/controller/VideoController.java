package com.example.backend.controller;

import com.example.backend.exception.NotVideoException;
import com.example.backend.service.StorageService;
import com.example.backend.service.ThumbnailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.Objects;

@Controller
@RequestMapping("/videos")
public class VideoController {
    private final StorageService storageService;
    private final ThumbnailService thumbnailService;

    @Autowired
    public VideoController(StorageService storageService, ThumbnailService thumbnailService) {
        this.storageService = storageService;
        this.thumbnailService = thumbnailService;
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

    @RequestMapping("/{filename:.+}/thumbnail")
    public ResponseEntity<byte[]> serveThumbnail(@PathVariable String filename) throws IOException {
        var file = storageService.loadAsResource(filename);
        if(file == null)
            return ResponseEntity.notFound().build();

        var videoPath = storageService.load(filename);
        var thumbnailBase64 = thumbnailService.convertToBase64(videoPath.toAbsolutePath().toString());
        if(thumbnailBase64 == null)
            return ResponseEntity.notFound().build();

        // Remove the data URI prefix if present
        if (thumbnailBase64.startsWith("data:image/jpeg;base64,")) {
            thumbnailBase64 = thumbnailBase64.substring("data:image/jpeg;base64,".length());
        }

        // Decode base64 to binary
        byte[] imageBytes = Base64.getDecoder().decode(thumbnailBase64);

        return ResponseEntity.ok()
                .header("Content-Type", "image/jpeg")
                .header("Content-Length", String.valueOf(imageBytes.length))
                .body(imageBytes);
    }

//    @RequestMapping("/{filename:.+}/thumbnail/resource")
//    public ResponseEntity<Resource> serveThumbnailResource(@PathVariable String filename) throws IOException {
//        var file = storageService.loadAsResource(filename);
//        if(file == null)
//            return ResponseEntity.notFound().build();
//
//        var videoPath = storageService.load(filename);
//        var thumbnailBase64 = thumbnailService.convertToBase64(videoPath.toAbsolutePath().toString());
//        if(thumbnailBase64 == null)
//            return ResponseEntity.notFound().build();
//
//        // Remove the data URI prefix if present
//        if (thumbnailBase64.startsWith("data:image/jpeg;base64,")) {
//            thumbnailBase64 = thumbnailBase64.substring("data:image/jpeg;base64,".length());
//        }
//
//        // Decode base64 to binary
//        byte[] imageBytes = Base64.getDecoder().decode(thumbnailBase64);
//
//        // Create a temporary file to store the image
//        var tempFile = File.createTempFile("thumbnail", ".jpg");
//        tempFile.deleteOnExit();
//        try (var outputStream = new FileOutputStream(tempFile)) {
//            outputStream.write(imageBytes);
//        } catch (IOException e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//        var resource = storageService.loadAsResource(tempFile.getName());
//        if(resource == null)
//            return ResponseEntity.notFound().build();
//        return ResponseEntity.ok()
//                .header("Content-Type", "image/jpeg")
//                .header("Content-Length", String.valueOf(imageBytes.length))
//                .body(resource);
//    }
}
