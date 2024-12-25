package com.example.foodShop.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.foodShop.JwtTokenProvider;
import com.example.foodShop.dto.CustomerDTO;
import com.example.foodShop.dto.UserDTO;
import com.example.foodShop.entity.CustomUserDetails;
import com.example.foodShop.entity.Customer;
import com.example.foodShop.entity.User;
import com.example.foodShop.service.CustomerService;
import com.example.foodShop.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin()
public class TestController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CustomerService customerService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired 
	private ModelMapper mapper;
	
	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody CustomerDTO customerDTO) {
		User user;
		Customer customer;
		customerDTO.setPassword(passwordEncoder.encode(customerDTO.getPassword()));
		user = mapper.map(customerDTO, User.class);
		user = userService.save(user);
		customer = mapper.map(customerDTO, Customer.class);
		customer.setUser(user);
		customerService.save(customer);
		return ResponseEntity.ok("Đã đăng ký thành công!");
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {
		try {
			Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
			SecurityContextHolder.getContext().setAuthentication(authentication);
			CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();
			String jwt = jwtTokenProvider.generateToken(customUserDetails);
			UserDTO userDTO = new UserDTO(customUserDetails.getUser().getUserId(), jwt, customUserDetails.getUser().getRole().getRoleId());
			return ResponseEntity.ok(userDTO);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body("Đăng nhập thất bại!");
		}
	}

	@GetMapping("/random")
//	@PreAuthorize("hasAnyAuthority('employee')")
	public String random() {
		return "JWT Hợp lệ mới có thể thấy được message này :)";
	}
}