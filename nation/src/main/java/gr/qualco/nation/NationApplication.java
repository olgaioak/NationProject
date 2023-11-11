package gr.qualco.nation;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import gr.qualco.persistence.CountriesMyBatisRepository;

@SpringBootApplication
public class NationApplication {
	
//	private Logger logger = LoggerFactory.getLogger(this.getClass());
//	
//    @Autowired
//    private CountriesMyBatisRepository countriesRepository;


//    public void run(String...args) throws Exception {
//
//        logger.info("All users -> {}", countriesRepository.findAll());
//    }

	public static void main(String[] args) {
		SpringApplication.run(NationApplication.class, args);
		
	}

}
