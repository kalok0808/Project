<?php
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

?>
     <!DOCTYPE html>
     <html>

     <head>
          <title>HOME</title>
          <link rel="stylesheet" type="text/css" href="style.css">
     </head>

     <body>
          <section class="showcase">
               <header>
                    <h2 class="logo">Welcome</h2>
                    <a href="logout.php" class="toggle"></a>

               </header>
               <img src="./IMG_4369-2.jpg" alt="">
               <div class="overlay"></div>
               <div class="text">
                    <h2>Hello,<?php echo $_SESSION['name']; ?></h2>
                    <div class="button">
                         <a href="">Task</a>
                         <a href="../Todo/index.php">Todo</a>
                    </div>
               </div>
          </section>

          <script src="./index.js"></script>

     </body>

     </html>

<?php
} else {
     header("Location: index.php");
     exit();
}
?>