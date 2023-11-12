package gr.qualco.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gr.qualco.dao.Country;
import gr.qualco.dao.Language;
import gr.qualco.persistence.CountriesMyBatisRepository;

@RestController
@RequestMapping("/api/v1")
public class CountriesController {
    @Autowired
    private CountriesMyBatisRepository countriesRepository;

    @GetMapping("/orderedCountries")
    public List<Country> getAllOrderedCountries() {
        return countriesRepository.findAll();
    }
    
    @GetMapping("/getLanguagesById/{id}")
    public List<Language> getLanguagesById(long id) {
        return countriesRepository.findById(id);
    }
    
    @GetMapping("/getGdpData")
    public List<Country> getGdpData() {
        return countriesRepository.getGdpData();
    }

}
