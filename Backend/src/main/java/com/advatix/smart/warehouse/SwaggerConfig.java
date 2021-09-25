package com.advatix.smart.warehouse;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.SecurityScheme;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.ApiKeyVehicle;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
@EnableAsync
public class SwaggerConfig {
	 @Bean
	    public Docket api() { 
	        return new Docket(DocumentationType.SWAGGER_2)  
	          .select()                                  
	          .apis(RequestHandlerSelectors.any())              
	          .paths(PathSelectors.any())                          
	          .build().
	          apiInfo(apiInfo())
	            .securitySchemes(Arrays.asList(apiKey()));
	    }
	 private ApiInfo apiInfo() {
		    return new ApiInfoBuilder()
		            .title("Warehouse API Document")
		            .description("help in integration of APIs")
		            .termsOfServiceUrl("localhost")
		            .version("1.0")
		            .build();
		}

		@Bean
		SecurityScheme apiKey() {
			return new ApiKey("Authorization", "Authorization", "header");
		}
	 
	
}
