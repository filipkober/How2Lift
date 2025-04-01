package com.example.backend.service;

import com.example.backend.record.MachineDTO;
import org.springframework.core.io.Resource;

import java.util.List;

public interface AIService {
    List<MachineDTO> identifyMachines(Resource imageResource);
}
