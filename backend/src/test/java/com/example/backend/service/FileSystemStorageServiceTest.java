package com.example.backend.service;

import com.example.backend.exception.StorageException;
import com.example.backend.exception.StorageFileNotFoundException;
import com.example.backend.properties.StorageProperties;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.springframework.core.io.Resource;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Random;

import static org.junit.jupiter.api.Assertions.*;

public class FileSystemStorageServiceTest {

    private StorageProperties properties;
    private FileSystemStorageService storageService;
    
    @TempDir
    Path tempDir;
    
    @BeforeEach
    public void setUp() {
        properties = new StorageProperties();
        properties.setLocation(tempDir.toString());
        storageService = new FileSystemStorageService(properties);
        storageService.init();
    }
    
    @Test
    public void testInit() {
        // Given a clean temp directory
        Path testDir = tempDir.resolve("test-init");
        properties.setLocation(testDir.toString());
        storageService = new FileSystemStorageService(properties);
        
        // When init is called
        storageService.init();
        
        // Then the directory is created
        assertTrue(Files.exists(testDir));
    }
    
    @Test
    public void testInitWithInvalidLocation() {
        // Given an invalid location (empty string)
        properties.setLocation("");
        
        // When constructor is called
        // Then it throws StorageException
        assertThrows(StorageException.class, () -> new FileSystemStorageService(properties));
    }
    
    @Test
    public void testStore() throws IOException {
        // Given
        byte[] content = new byte[1000];
        new Random().nextBytes(content);
        MultipartFile file = new MockMultipartFile("test.txt", "test.txt", "text/plain", content);
        
        // When
        storageService.store(file);
        
        // Then
        Path savedFile = tempDir.resolve("test.txt");
        assertTrue(Files.exists(savedFile));
        assertArrayEquals(content, Files.readAllBytes(savedFile));
    }
    
    @Test
    public void testStoreWithEmptyFile() {
        // Given
        MultipartFile emptyFile = new MockMultipartFile("empty.txt", "empty.txt", "text/plain", new byte[0]);
        
        // When/Then
        assertThrows(StorageException.class, () -> storageService.store(emptyFile));
    }
    
    @Test
    public void testStoreFileWithRelativePath() {
        // Given a file with a path traversal attempt
        MultipartFile file = new MockMultipartFile("test.txt", "../outside.txt", "text/plain", "data".getBytes());
        
        // When/Then
        assertThrows(StorageException.class, () -> storageService.store(file));
    }
    
    @Test
    public void testLoadAsResource() throws IOException {
        // Given
        byte[] content = "test content".getBytes();
        String filename = "test-load.txt";
        Files.write(tempDir.resolve(filename), content);
        
        // When
        Resource resource = storageService.loadAsResource(filename);
        
        // Then
        assertTrue(resource.exists());
        assertArrayEquals(content, Files.readAllBytes(resource.getFile().toPath()));
    }
    
    @Test
    public void testLoadNonExistentFile() {
        // Given a filename that doesn't exist
        String filename = "nonexistent.txt";
        
        // When/Then
        assertThrows(StorageFileNotFoundException.class, () -> storageService.loadAsResource(filename));
    }
    
    @Test
    public void testDeleteAll() throws IOException {
        // Given
        String filename = "test-delete.txt";
        Files.write(tempDir.resolve(filename), "content".getBytes());
        
        // When
        storageService.deleteAll();
        
        // Then
        assertFalse(Files.exists(tempDir.resolve(filename)));
    }
}
