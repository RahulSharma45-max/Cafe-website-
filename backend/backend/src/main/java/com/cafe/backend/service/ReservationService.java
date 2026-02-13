package com.cafe.backend.service;

import com.cafe.backend.dto.ReservationDTO;
import com.cafe.backend.model.Reservation;
import com.cafe.backend.repository.ReservationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReservationService {
    
    private final ReservationRepository reservationRepository;
    
    public Reservation createReservation(ReservationDTO reservationDTO) {
        log.info("Creating reservation for: {}", reservationDTO.getName());
        
        Reservation reservation = new Reservation();
        reservation.setName(reservationDTO.getName());
        reservation.setPhone(reservationDTO.getPhone());
        reservation.setReservationDate(LocalDate.parse(reservationDTO.getDate()));
        reservation.setReservationTime(LocalTime.parse(reservationDTO.getTime()));
        reservation.setNumberOfPeople(reservationDTO.getNumberOfPeople());
        
        Reservation savedReservation = reservationRepository.save(reservation);
        log.info("Reservation created successfully with ID: {}", savedReservation.getId());
        
        return savedReservation;
    }
}