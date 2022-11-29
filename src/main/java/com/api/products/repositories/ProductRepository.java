package com.api.products.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.api.products.model.ProductModel;

@Repository
public interface ProductRepository extends CrudRepository<ProductModel, Long>{

}
