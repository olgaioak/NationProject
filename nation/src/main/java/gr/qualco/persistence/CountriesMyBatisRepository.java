package gr.qualco.persistence;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import gr.qualco.dao.Country;

@Mapper
public interface CountriesMyBatisRepository {
	
    @Select("select * from countries")
    public List <Country> findAll();

}
