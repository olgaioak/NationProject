package gr.qualco.dao;

public class Language {
	private int country_id;
	private int language_id;
	private int official;
	private String language;
	public int getCountry_id() {
		return country_id;
	}
	public void setCountry_id(int country_id) {
		this.country_id = country_id;
	}
	public int getLanguage_id() {
		return language_id;
	}
	public void setLanguage_id(int language_id) {
		this.language_id = language_id;
	}
	public int getOfficial() {
		return official;
	}
	public void setOfficial(int official) {
		this.official = official;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	

}
