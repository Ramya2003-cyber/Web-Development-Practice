<?php
   session_start();
   $db_hostname="localhost:3307";
   $db_username="root";
   $db_password="";
   $db_name="imdb";

   $conn=mysqli_connect($db_hostname,$db_username,$db_password,$db_name);
   if(!$conn)
   {
    echo "Connection failed: ".mysqli_connect_error();
    exit;
   }

   $password=$_POST['password'];
   $email=$_POST['email'];

   $sql="SELECT * from users where email='$email' and password='$password'";

   $result=mysqli_query($conn,$sql);
   if(!$result)
   {
    echo "Error: ".mysqli_error($conn);
    exit;
   }
   $row=mysqli_fetch_assoc($result);
   if($row)
   {
       echo  "hi ".$row['name']."<br/>";

       $_SESSION['name']=$row['name'];
       $_SESSION['email']=$row['email'];

       
        ?>
      <a href="dashboard.php">Click Here</a>;
    <?php
        
  }
   else{
       echo "Login unsuccessful";
       exit;
    }

   mysqli_close($conn);
   
?>