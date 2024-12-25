package com.example.foodShop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;

@SpringBootApplication
public class FoodShopApplication implements CommandLineRunner {

	@Autowired
	private SocketIOServer server;

	public static void main(String[] args) {
		SpringApplication.run(FoodShopApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		server.addConnectListener(new ConnectListener() {

			@Override
			public void onConnect(SocketIOClient client) {
				System.out.println("client: " + client);
			}
		});
		server.start();
		Runtime.getRuntime().addShutdownHook(new Thread(server::stop));
	}
}