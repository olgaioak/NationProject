package gr.qualco.persistence;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import gr.qualco.dao.Country;
import gr.qualco.dao.Language;

@Mapper
public interface CountriesMyBatisRepository {
	
    @Select("select * from nation.countries order by name asc")
    public List <Country> findAll();
    
    @Select("select * from nation.country_languages cl inner join nation.languages l on l.language_id = cl.language_id where cl.country_id =  #{id}")
    public  List <Language> findById(long id);
    
    @Select("select c.name, c.country_code3, cs.year, cs.population, cs.gdp from nation.countries c inner join nation.country_stats cs  on c.country_id = cs.country_id where cs.gdp  in (select distinct max(s.gdp) popGdp from nation.country_stats s group by s.population)")
    public List <Country> getGdpData();

}
