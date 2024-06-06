package com.example.jwt;

import java.util.Date;

import org.springframework.stereotype.Component;

import com.example.jwt.entity.CustomUserDetails;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;

@Component
public class JwtTokenProvider {
	
	private final String JWT_SECRET = "lodaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
	
	private final long JWT_EXPIRATION = 604800000L;
	
	public String generateToken(CustomUserDetails userDetails) {
		Date now = new Date();
		Date expiryDate = new Date(now.getTime() + JWT_EXPIRATION);
		
		return Jwts.builder()
				   .setSubject(Long.toString(userDetails.getUser().getUserId()))
				   .setIssuedAt(now)
				   .setExpiration(expiryDate)
				   .signWith(SignatureAlgorithm.HS512, JWT_SECRET)
				   .compact();
	}	
	
	public Long getUserIdFromJwt(String token) {
		 Claims claims = Jwts.parser()
                             .setSigningKey(JWT_SECRET)
                             .build()
                             .parseClaimsJws(token)
                             .getBody();
		 return Long.parseLong(claims.getSubject());
	}
	
	public boolean validateToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(JWT_SECRET).build().parseClaimsJws(authToken);
			return true;
		} catch (MalformedJwtException e) {
			System.out.println("Invalid JWT token");
		} catch (ExpiredJwtException e) {
			System.out.println("Expired JWT token");
		} catch (UnsupportedJwtException e) {
			System.out.println("Unsupported JWT token");
		} catch (IllegalArgumentException e) {
			System.out.println("JWT claims string is empty.");
		}
		return false;
	}
}