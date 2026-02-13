package com.cafe.backend.service;

import com.cafe.backend.dto.ContactDTO;
import com.cafe.backend.model.Contact;
import com.cafe.backend.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactService {
    
    private final ContactRepository contactRepository;
    
    public Contact saveContact(ContactDTO contactDTO) {
        log.info("Saving contact from: {}", contactDTO.getEmail());
        
        Contact contact = new Contact();
        contact.setName(contactDTO.getName());
        contact.setEmail(contactDTO.getEmail());
        contact.setMessage(contactDTO.getMessage());
        
        Contact savedContact = contactRepository.save(contact);
        log.info("Contact saved successfully with ID: {}", savedContact.getId());
        
        return savedContact;
    }
}