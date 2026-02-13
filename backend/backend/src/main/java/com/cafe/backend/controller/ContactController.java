package com.cafe.backend.controller;

import com.cafe.backend.dto.ApiResponse;
import com.cafe.backend.dto.ContactDTO;
import com.cafe.backend.model.Contact;
import com.cafe.backend.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {
    
    private final ContactService contactService;
    
    @PostMapping
    public ResponseEntity<ApiResponse> submitContact(@Valid @RequestBody ContactDTO contactDTO) {
        log.info("Received contact request from: {}", contactDTO.getEmail());
        
        try {
            Contact savedContact = contactService.saveContact(contactDTO);
            
            ApiResponse response = new ApiResponse(
                true, 
                "Thank you for contacting us! We'll get back to you soon.",
                savedContact
            );
            
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
            
        } catch (Exception e) {
            log.error("Error saving contact: ", e);
            ApiResponse response = new ApiResponse(
                false, 
                "Failed to submit contact form. Please try again."
            );
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}