package com.api.products.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.api.products.model.ProductModel;
import com.api.products.model.ResponseModel;
import com.api.products.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ResponseModel responseModel;
	
	public Iterable<ProductModel> list(){
		return productRepository.findAll();
	}

	public ResponseEntity<?> register(ProductModel product){
		if(product.getName().equals("")) {
			responseModel.setMessage("Product's name is required!");
			return new ResponseEntity<ResponseModel>(responseModel, HttpStatus.BAD_REQUEST);
		}
		else if(product.getBrand().equals("")) {
			responseModel.setMessage("Product's brand is required!");
			return new ResponseEntity<ResponseModel>(responseModel, HttpStatus.BAD_REQUEST);
		}
		else {
			return new ResponseEntity<ProductModel>(productRepository.save(product), HttpStatus.CREATED);
		}
	}
}
