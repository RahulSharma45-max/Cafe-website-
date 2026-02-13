package com.cafe.backend.service;

import com.cafe.backend.model.MenuItem;
import com.cafe.backend.repository.MenuRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class MenuService {
    
    private final MenuRepository menuRepository;
    
    public List<MenuItem> getAllMenuItems() {
        log.info("Fetching all menu items");
        List<MenuItem> items = menuRepository.findAll();
        log.info("Found {} menu items", items.size());
        return items;
    }
    
    public List<MenuItem> getMenuItemsByCategory(String category) {
        log.info("Fetching menu items by category: {}", category);
        return menuRepository.findByCategory(category);
    }
}