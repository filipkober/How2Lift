package com.example.backend.service;

import com.example.backend.model.Machine;
import org.springframework.core.io.Resource;

import java.util.List;

public interface AIService {
    List<Machine> identifyMachines(Resource imageResource);
}
