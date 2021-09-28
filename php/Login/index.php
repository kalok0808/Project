<!DOCTYPE html>
<html>

<head>
	<title>LOGIN</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>

	<form action="login.php" method="post">
		<h2>LOGIN</h2>
		<div class="login_img">
			<img src="./clipart2603183.png" alt="">
		</div>
		<?php if (isset($_GET['error'])) { ?>
			<p class="error"><?php echo $_GET['error']; ?></p>
		<?php } ?>
		<label>User Name</label>
		<input type="text" name="uname" placeholder="User Name"><br>

		<label>Password</label>
		<input type="password" name="password" placeholder="Password"><br>
		<div class="button">
			<button type="submit">Login</button>
		</div>
	</form>
</body>

</html>