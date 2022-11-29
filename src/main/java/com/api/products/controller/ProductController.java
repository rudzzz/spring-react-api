package com.api.products.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.products.model.ProductModel;
import com.api.products.services.ProductService;

@RestController
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/list")
	public Iterable<ProductModel> list() {
		return productService.list();
	}
	
	@GetMapping("/")
	public String rote() {
		return "teste";
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody ProductModel product){
		return productService.register(product);
	}
}
