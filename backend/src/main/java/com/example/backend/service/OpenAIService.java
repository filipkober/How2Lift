package com.example.backend.service;

import com.example.backend.model.Machine;
import com.example.backend.record.MachineSuggestion;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.converter.ListOutputConverter;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.convert.support.DefaultConversionService;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.util.MimeTypeUtils;

import java.util.List;

@Service
public class OpenAIService implements AIService {

    private final ChatClient chatClient;
    private final MachineService machineService;
    private final MuscleService muscleService;

    @Autowired
    public OpenAIService(ChatClient.Builder chatClientBuilder, MachineService machineService, MuscleService muscleService) {

        this.machineService = machineService;
        this.muscleService = muscleService;

        this.chatClient = chatClientBuilder.defaultOptions(
                OpenAiChatOptions.builder()
                        .withModel(OpenAiApi.ChatModel.GPT_4_TURBO.getValue()).build())
                .build();
    }

    @Override
    public List<Machine> identifyMachines(Resource imageResource) {
        var allMachineNames = machineService.getAllMachineNames();
        List<String> identifiedMachineNames = chatClient.prompt()
                .user(u -> u.text("Identify the exercise machines or equipment in the provided image, according to the following possibilities: {machines}")
                        .param("machines", allMachineNames)
                        .media(MimeTypeUtils.IMAGE_PNG, imageResource))
                .call()
                .entity(new ListOutputConverter(new DefaultConversionService()));

        return machineService.getMachinesByNames(identifiedMachineNames);
    }

    public List<String> suggestNewMuscleNames(){
        var currentMuscleNames = muscleService.getAllMuscleNames();
        return chatClient.prompt()
                .user(u -> u.text("Suggest new muscle names that could be added to the database (it contains commonly trained muscles), the existing ones are: {muscles}")
                        .param("muscles", currentMuscleNames))
                .call()
                .entity(new ListOutputConverter(new DefaultConversionService()));
    }

    public List<Machine> suggestNewMachines() {
        var currentMachineNames = machineService.getAllMachineNames();
        var allMuscleNames = muscleService.getAllMuscleNames();
        List<MachineSuggestion> suggestions = chatClient.prompt()
                .user(u -> u.text("Suggest new machine names that could be added to the database, the existing ones are: {machines}; The muscles available in the database are: {muscles}. Include all applicable")
                        .param("machines", currentMachineNames)
                        .param("muscles", allMuscleNames)
                )
                .call()
                .entity(new ParameterizedTypeReference<>() {
                });
        return machineService.getMachinesFromSuggestions(suggestions);
    }
}
