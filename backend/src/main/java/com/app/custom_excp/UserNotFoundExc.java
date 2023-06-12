package com.app.custom_excp;

@SuppressWarnings("serial")
public class UserNotFoundExc extends RuntimeException {
	
	public UserNotFoundExc(String msg) {
		super(msg);
		// TODO Auto-generated constructor stub
	}

}
