<?php
	if(isset($_POST['submit-form'])){

		$email=$_POST['email'];




		$to='webistle@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject= "mailby"
		$message= $email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>
