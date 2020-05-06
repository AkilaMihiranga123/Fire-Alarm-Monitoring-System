package com.client.java;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SendEmail {

	public static void sendMail(String recepient,int floor,int room) throws MessagingException {
		System.out.println("Preparing to Send Emergency Alert Email.!");
		Properties properties = new Properties();
		//set properties
		properties.put("mail.smtp.auth","true");
		properties.put("mail.smtp.starttls.enable","true");
		properties.put("mail.smtp.host","smtp.gmail.com");
		properties.put("mail.smtp.port","587");
		
		//set senders email address and password
		String adminEmail = "akilamihiranganew484@gmail.com";
		String adminPassword = "DSassignment@8990";
		
		Session session = Session.getInstance(properties, new Authenticator()  {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(adminEmail, adminPassword);
			}
		});
		
		//prepare email
		Message emergencyMessage = prepareMessage(session,adminEmail,recepient, floor, room);
		//send email
		Transport.send(emergencyMessage);
		//show successful message.
		System.out.println("Emergency Message Send Successfully.!");
	}

	private static Message prepareMessage(Session session, String adminEmail, String recepient,int floor,int room) {
		try {
			//create new Message object.
			Message setMessage = new MimeMessage(session);
			//set email form.
			setMessage.setFrom(new InternetAddress(adminEmail));
			//set Recipient.
			setMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(recepient));
			//set email subject.
			setMessage.setSubject("Emergency.!Fire Alarm Sensor Active.");
			//set email text.
			setMessage.setText("!!!!! EMERGENCY !!!!! \nFloor Number : " + floor + " , Room Number : " + room + "\nTake an Immediate Action.!");
			//return emai message
			return setMessage;
		} catch (Exception e) {
			System.out.println("Error" + e);
		}
		return null;
	}

}
