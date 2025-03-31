package com.example.backend.service;

import net.bramp.ffmpeg.FFmpeg;
import net.bramp.ffmpeg.FFmpegExecutor;
import net.bramp.ffmpeg.builder.FFmpegBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Base64;

@Service
public class ThumbnailService {

    private final FFmpeg ffmpeg;

    public ThumbnailService(@Value("${linux.ffmpeg.path}") String linuxFFmpegPath) throws IOException {
        String os = System.getProperty("os.name").toLowerCase();
        String binaryPath;
        if (os.contains("win")) {
            binaryPath = "binaries/windows/ffmpeg.exe";
        } else {
            binaryPath = linuxFFmpegPath;
        }

        // Load FFmpeg from resources
        File ffmpegFile = extractResource(binaryPath);
        this.ffmpeg = new FFmpeg(ffmpegFile.getAbsolutePath());
    }

    private File extractResource(String resourcePath) throws IOException {
        ClassPathResource resource = new ClassPathResource(resourcePath);
        File tempFile = File.createTempFile("ffmpeg", resourcePath.endsWith(".exe") ? ".exe" : "");
        tempFile.setExecutable(true);
        Files.copy(resource.getInputStream(), tempFile.toPath(), java.nio.file.StandardCopyOption.REPLACE_EXISTING);
        return tempFile;
    }


    public String convertToBase64(String videoPath) throws IOException {
        var tempFile = File.createTempFile("temp_image",".jpg");
        var tempImagePath = tempFile.getAbsolutePath();

        try {
            // Build FFmpeg command to extract a frame
            FFmpegBuilder builder = new FFmpegBuilder()
                    .setInput(videoPath)
                    .overrideOutputFiles(true)
                    .addOutput(tempImagePath)
                    .setFrames(1)  // Extract only 1 frame
                    .done();

            // Execute the FFmpeg command
            FFmpegExecutor executor = new FFmpegExecutor(ffmpeg);
            executor.createJob(builder).run();
            return convertToBase64(tempImagePath, 80);

        } catch (IOException e) {
            System.out.println("Error extracting frame: " + e.getMessage());
        } finally {
            tempFile.delete();
        }
        return null;

    }

    public String convertToBase64(String imagePath, double scalePercent) throws IOException {
        // Read the original image from the file
        BufferedImage originalImage = ImageIO.read(new File(imagePath));

        // Calculate the new dimensions based on the scaling percentage
        int targetWidth = (int) (originalImage.getWidth() * scalePercent / 100);
        int targetHeight = (int) (originalImage.getHeight() * scalePercent / 100);

        // Resize the image
        BufferedImage resizedImage = new BufferedImage(targetWidth, targetHeight, BufferedImage.TYPE_INT_RGB);
        Graphics2D graphics = resizedImage.createGraphics();
        graphics.drawImage(originalImage, 0, 0, targetWidth, targetHeight, null);
        graphics.dispose();

        // Convert the resized image to a ByteArrayOutputStream in JPEG format
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ImageIO.write(resizedImage, "jpeg", outputStream);

        // Encode to Base64
        String base64Image = Base64.getEncoder().encodeToString(outputStream.toByteArray());

        // Close the stream
        outputStream.close();

        return "data:image/jpeg;base64," + base64Image;
    }
}
