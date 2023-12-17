package com.gonie.rest_api.Todo_App._restful_Api.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gonie.rest_api.Todo_App._restful_Api.todo.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer>{
	
	List<Todo> findByUsername(String username);

}
