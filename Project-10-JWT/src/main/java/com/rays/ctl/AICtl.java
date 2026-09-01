package com.rays.ctl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/ai")
public class AICtl {

    @GetMapping("/read-file")
    public String readFile() throws IOException {

        Path path = Paths.get("E:\\Ollama Practice\\Ai.txt");

        String data = Files.readString(path);

        return data;
    }
    @PostMapping("/ask")
    public ResponseEntity<?> askAI(
            @RequestBody Map<String, String> request) throws IOException {

        // Get question from Postman
        String question = request.get("question");

        // Read your local file
        String fileData = Files.readString(
                Paths.get("E:/Ollama Practice/Ai.txt")
        );

        // Create prompt
        String prompt =
                "Answer the question using only the data provided below.\n\n"
                + "DATA:\n"
                + fileData
                + "\n\nQUESTION:\n"
                + question;

        // Create request for Ollama
        Map<String, Object> ollamaRequest = new HashMap<>();

        ollamaRequest.put("model", "llama3.2");
        ollamaRequest.put("prompt", prompt);
        ollamaRequest.put("stream", false);

        // Call Ollama API
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<Map> response = restTemplate.postForEntity(
                "http://localhost:11434/api/generate",
                ollamaRequest,
                Map.class
        );

        // Return only the AI answer
        return ResponseEntity.ok(
                response.getBody().get("response")
        );
    }
}