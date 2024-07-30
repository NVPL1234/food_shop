package com.example.jwt.controller;

//Java version "1.8.0_201"
import org.apache.http.NameValuePair; // https://mvnrepository.com/artifact/org.apache.httpcomponents/httpclient
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONObject; // https://mvnrepository.com/artifact/org.json/json
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vn.zalopay.crypto.HMACUtil; // tải về ở mục DOWNLOADS

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@CrossOrigin()
public class PaymentController {

	private static Map<String, String> config = new HashMap<String, String>() {
		{
			put("appid", "554");
			put("key1", "8NdU5pG5R2spGHGhyO99HN1OhD8IQJBn");
			put("key2", "uUfsWgfLkRLzq6W2uNXTCxrfxs51auny");
			put("endpoint", "https://sandbox.zalopay.com.vn/v001/tpe/createorder");
		}
	};

	public static String getCurrentTimeString(String format) {
		Calendar cal = new GregorianCalendar(TimeZone.getTimeZone("GMT+7"));
		SimpleDateFormat fmt = new SimpleDateFormat(format);
		fmt.setCalendar(cal);
		return fmt.format(cal.getTimeInMillis());
	}

	@PostMapping("/payments")
	public String createOrder(@RequestParam Long total) throws Exception {

		final Map embeddata = new HashMap() {
			{
				put("merchantinfo", "embeddata123");
				put("redirecturl", "http://localhost:3000/payment_success");
			}
		};

		final Map[] item = { new HashMap() {
			{
				put("itemid", "knb");
				put("itemname", "kim nguyen bao");
				put("itemprice", 198400);
				put("itemquantity", 1);
			}
		} };

		String appTransId = getCurrentTimeString("yyMMdd") + "_" + UUID.randomUUID();

		Map<String, Object> order = new HashMap<String, Object>() {
			{
				put("appid", config.get("appid"));
				put("apptransid", appTransId); // mã giao dich có định dạng yyMMdd_xxxx
				put("apptime", System.currentTimeMillis()); // miliseconds
				put("appuser", "demo");
				put("amount", total);
				put("description", "Mr.Chef - Thanh toan don hang #" + appTransId);
				put("bankcode", "zalopayapp");
				put("item", new JSONObject(item).toString());
				put("embeddata", new JSONObject(embeddata).toString());
			}
		};

		// appid +”|”+ apptransid +”|”+ appuser +”|”+ amount +"|"+ apptime +”|”+
		// embeddata +"|"+ item
		String data = order.get("appid") + "|" + order.get("apptransid") + "|" + order.get("appuser") + "|"
				+ order.get("amount") + "|" + order.get("apptime") + "|" + order.get("embeddata") + "|"
				+ order.get("item");
		order.put("mac", HMACUtil.HMacHexStringEncode(HMACUtil.HMACSHA256, config.get("key1"), data));

		CloseableHttpClient client = HttpClients.createDefault();
		HttpPost post = new HttpPost(config.get("endpoint"));

		List<NameValuePair> params = new ArrayList<>();
		for (Map.Entry<String, Object> e : order.entrySet()) {
			params.add(new BasicNameValuePair(e.getKey(), e.getValue().toString()));
		}

		// Content-Type: application/x-www-form-urlencoded
		post.setEntity(new UrlEncodedFormEntity(params));

		CloseableHttpResponse res = client.execute(post);
		BufferedReader rd = new BufferedReader(new InputStreamReader(res.getEntity().getContent()));
		StringBuilder resultJsonStr = new StringBuilder();
		String line;

		while ((line = rd.readLine()) != null) {
			resultJsonStr.append(line);
		}

		JSONObject result = new JSONObject(resultJsonStr.toString());
		for (String key : result.keySet()) {
			System.out.format("%s = %s\n", key, result.get(key));
		}
		return result.get("orderurl").toString();
	}
}