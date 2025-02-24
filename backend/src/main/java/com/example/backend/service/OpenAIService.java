package com.example.backend.service;

import com.example.backend.model.Machine;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.converter.ListOutputConverter;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.ai.openai.api.OpenAiApi;
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

        this.machineService = machineService;
        var allMachineNames = this.machineService.getAllMachineNames();
        System.out.println(allMachineNames);
        this.chatClient = chatClientBuilder.defaultOptions(
                OpenAiChatOptions.builder()
                        .withModel(OpenAiApi.ChatModel.GPT_4_TURBO.getValue()).build())
                .defaultUser(u -> u.text("Identify the exercise machines or equipment in the provided image, according to the following possibilities: {machines}")
                        .param("machines", allMachineNames)
                )
                .build();
    }

    @Override
    public List<Machine> identifyMachines(Resource imageResource) {

        List<String> identifiedMachineNames = chatClient.prompt()
                .user(u -> u.media(MimeTypeUtils.IMAGE_PNG, imageResource))
                .call()
                .entity(new ListOutputConverter(new DefaultConversionService()));

        return machineService.getMachinesByNames(identifiedMachineNames);
    }
}
