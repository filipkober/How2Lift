package com.example.backend.service;

import com.example.backend.model.Machine;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.converter.ListOutputConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.support.DefaultConversionService;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.util.MimeTypeUtils;

import java.util.List;

@Service
public class OpenAIService implements AIService {

    private final ChatClient chatClient;
    private final MachineService machineService;

    @Autowired
    public OpenAIService(ChatClient.Builder chatClientBuilder, MachineService machineService) {
        this.chatClient = chatClientBuilder.build();
        this.machineService = machineService;
    }

    @Override
    public List<Machine> identifyMachines(Resource imageResource) {

        var allMachineNames = machineService.getAllMachineNames();

        List<String> identifiedMachineNames = chatClient.prompt()
                .system(s -> s.text("Identify the exercise machines or equipment in the provided image, according to the following possibilites:")
                        .param("machine names", allMachineNames)
                )
                .user(u -> u.media(MimeTypeUtils.IMAGE_PNG, imageResource))
                .call()
                .entity(new ListOutputConverter(new DefaultConversionService()));

        return machineService.getMachinesByNames(identifiedMachineNames);
    }
}
