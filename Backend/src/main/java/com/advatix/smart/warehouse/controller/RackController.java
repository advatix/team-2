package com.advatix.smart.warehouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.advatix.smart.warehouse.common.utils.RestResponse;
import com.advatix.smart.warehouse.common.utils.RestUtils;
import com.advatix.smart.warehouse.pojo.RackMasterPojo;
import com.advatix.smart.warehouse.service.RackService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/rack")
@Api(value = "/Rack API's", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, tags = {
		"Rack API's" }, hidden = false)
@ApiResponses(value = { @ApiResponse(code = 201, message = "Created"),
		@ApiResponse(code = 401, message = "Not Authorized"), @ApiResponse(code = 403, message = "Not Authenticated"),
		@ApiResponse(code = 404, message = "Not found"), @ApiResponse(code = 500, message = "Internal Server Error") })
public class RackController {

	@Autowired
	private RackService service;

	@ApiOperation(value = "Get List", response = RackMasterPojo.class, httpMethod = "GET", notes = "Get List")
	@ApiImplicitParams({@ApiImplicitParam(name = "Authorization", value = "Authorization token", required = true, dataType = "string", paramType = "header") })
	@ApiResponses(value = { @ApiResponse(code = 200, message = "", response = RackMasterPojo.class) })
	@GetMapping("/list")
	public ResponseEntity<RestResponse<List<RackMasterPojo>>> list() {
		return RestUtils.successResponse(service.list());
	}
	
	
	@ApiOperation(value = "Save", response = RackMasterPojo.class, httpMethod = "POST", notes = "Save")
	@ApiImplicitParams({@ApiImplicitParam(name = "Authorization", value = "Authorization token", required = true, dataType = "string", paramType = "header") })
	@ApiResponses(value = { @ApiResponse(code = 200, message = "", response = RackMasterPojo.class) })
	@PostMapping("/save")
	public ResponseEntity<RestResponse<RackMasterPojo>> save(@RequestBody RackMasterPojo rackMasterPojo) {
		return RestUtils.successResponse(service.save(rackMasterPojo));
	}
	
	
    @ApiOperation(value = "Delete", response = String.class, httpMethod = "DELETE", notes = "Delete")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "", response = String.class)})
    @ApiImplicitParams({@ApiImplicitParam(name = "Authorization", value = "Authorization token", required = true, dataType = "string", paramType = "header")})
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<RestResponse<String>> delete(@PathVariable int id) {
        service.deleteById(id);
        return RestUtils.successResponse("Deleted Successfully");
    }
    
    @ApiOperation(value = "Get By Id", response = RackMasterPojo.class, httpMethod = "GET", notes = "Get By Id")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "", response = RackMasterPojo.class)})
    @GetMapping(path = "/getById/{id}")
    @ResponseBody
    public ResponseEntity<RestResponse<RackMasterPojo>> getById(@PathVariable int id)
     {
        return RestUtils.successResponse(service.getById(id));
    }
	
	
	

}