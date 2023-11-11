package gr.qualco.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gr.qualco.dao.Country;
import gr.qualco.persistence.CountriesMyBatisRepository;

@RestController
@RequestMapping("/api/v1")
public class CountriesController {
    @Autowired
    private CountriesMyBatisRepository countriesRepository;

    @GetMapping("/employees")
    public List<Country> getAllEmployees() {
        return countriesRepository.findAll();
    }

}
