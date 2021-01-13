<?php
	if(isset($_POST['submit-form'])){
		$name=$_POST['username'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$msg=$_POST['Message'];
		$subjectbyuser=$_POST['subject']

		$to='webistle@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject=$subjectbyuser
		$message="Name :".$name."\n"."Phone :".$phone."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>
