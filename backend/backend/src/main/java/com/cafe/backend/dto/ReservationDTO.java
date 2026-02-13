package com.cafe.backend.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationDTO {
    
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    private String name;
    
    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[0-9]{10,15}$", message = "Phone number must be 10-15 digits")
    private String phone;
    
    @NotBlank(message = "Date is required")
    private String date;
    
    @NotBlank(message = "Time is required")
    private String time;
    
    @NotNull(message = "Number of people is required")
    @Min(value = 1, message = "At least 1 person required")
    @Max(value = 20, message = "Maximum 20 people allowed")
    private Integer numberOfPeople;
}