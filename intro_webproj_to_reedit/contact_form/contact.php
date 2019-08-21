
<?php

if($_POST["submit"]) {
    $recipient="bab619@nyu.edu";
    $subject="Form to email message";
    $firstname=$_POST["firstname"];
    $lastname=$_POST["lastname"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $firstname <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}


<!DOCTYPE html>
<html>
<head>
<title></title>
</head>


?><body>



<h3>Contact Form</h3>

<?=$thankYou ?>

<div class="container">
  <form method="post" action="conact.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label>Email address:</label>
    <input name="senderEmail">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>






</body>
</html>