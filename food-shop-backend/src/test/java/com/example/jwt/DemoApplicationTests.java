package com.example.jwt;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.corundumstudio.socketio.SocketIOServer;
import com.example.foodShop.repository.OrderRepository;

@SpringBootTest
class DemoApplicationTests {
	
	@Autowired
	SocketIOServer server;

	@Test
	void contextLoads() {
	}
}