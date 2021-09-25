package com.advatix.smart.warehouse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.Ordered;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan("com")
@EnableJpaRepositories
public class WarehouseApplication {

	public static void main(String[] args) {
		SpringApplication.run(WarehouseApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean<CorsFilter> corsFilter() {
	  UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	  CorsConfiguration config = new CorsConfiguration();
	  config.setAllowCredentials(false);
	  config.addAllowedOrigin("*");
	  config.addAllowedHeader("*");
	  config.addAllowedMethod("*");
	  
	  config.addExposedHeader("Authorization");
	  config.addExposedHeader("Content-Type");
	  config.addExposedHeader("X-AUTH-TOKEN");
	  config.addExposedHeader("AUTH-TOKEN");
	  config.addExposedHeader("Device-Type");
	  config.addExposedHeader("AppVersionNo");
	  config.setMaxAge(1L);
	  source.registerCorsConfiguration("/**", config);
	  FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
	  bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
	  return bean;
	}
}
