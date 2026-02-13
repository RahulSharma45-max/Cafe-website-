package com.cafe.backend.controller;

import com.cafe.backend.dto.ApiResponse;
import com.cafe.backend.model.MenuItem;
import com.cafe.backend.service.MenuService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:5173")
public class MenuController {
    
    private final MenuService menuService;
    
    @GetMapping
    public ResponseEntity<ApiResponse> getAllMenuItems() {
        log.info("Fetching all menu items");
        
        try {
            List<MenuItem> menuItems = menuService.getAllMenuItems();
            
            ApiResponse response = new ApiResponse(
                true,
                "Menu items retrieved successfully",
                menuItems
            );
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            log.error("Error fetching menu items: ", e);
            ApiResponse response = new ApiResponse(
                false,
                "Failed to fetch menu items"
            );
            return ResponseEntity.internalServerError().body(response);
        }
    }
    
    @GetMapping("/category/{category}")
    public ResponseEntity<ApiResponse> getMenuItemsByCategory(@PathVariable String category) {
        log.info("Fetching menu items for category: {}", category);
        
        List<MenuItem> menuItems = menuService.getMenuItemsByCategory(category);
        
        ApiResponse response = new ApiResponse(
            true,
            "Menu items retrieved successfully",
            menuItems
        );
        
        return ResponseEntity.ok(response);
    }
}