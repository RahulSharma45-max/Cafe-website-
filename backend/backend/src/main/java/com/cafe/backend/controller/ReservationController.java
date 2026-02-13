package com.cafe.backend.controller;

import com.cafe.backend.dto.ApiResponse;
import com.cafe.backend.dto.ReservationDTO;
import com.cafe.backend.model.Reservation;
import com.cafe.backend.service.ReservationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reservations")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:5173")
public class ReservationController {
    
    private final ReservationService reservationService;
    
    @PostMapping
    public ResponseEntity<ApiResponse> createReservation(@Valid @RequestBody ReservationDTO reservationDTO) {
        log.info("Received reservation request for: {}", reservationDTO.getName());
        
        try {
            Reservation savedReservation = reservationService.createReservation(reservationDTO);
            
            ApiResponse response = new ApiResponse(
                true,
                "Reservation confirmed! We look forward to seeing you.",
                savedReservation
            );
            
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
            
        } catch (Exception e) {
            log.error("Error creating reservation: ", e);
            ApiResponse response = new ApiResponse(
                false,
                "Failed to create reservation. Please try again."
            );
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}