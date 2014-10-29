<?php

    $mailcheck = spamcheck($_POST["email"]);
    if ($mailcheck==true) {
	    $from = $_POST["name"]; // sender
	    $email = $_POST["email"]; 
	    $message = $_POST["message"];
	    // message lines should not exceed 70 characters (PHP rule), so wrap it
	    $message = wordwrap($message, 70);
	    // send mail
	    if (mail("quimidesign@gmail.com","YourWeb",$email. " - " . $from ." - " . $message,"From: $email\n")){
			echo "Many Thanks ".$from."! I'm going to reply to you soon.";
		}
		else{
			echo "Uoops... Sorry ".$from. "Something went wrong. Try to email me please.";
		}
    }else{
    	echo "Sorry, Invalid email.";
    }
function spamcheck($field) {
  // Sanitize e-mail address
  $field=filter_var($field, FILTER_SANITIZE_EMAIL);
  // Validate e-mail address
  if(filter_var($field, FILTER_VALIDATE_EMAIL)) {
    return TRUE;
  } else {
    return FALSE;
  }
}

?>