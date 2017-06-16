<?php include('includes/header.php');?>
<header>
    <img class="top-img" src="img/canon-seattle-about.jpg" alt="Canon Seattle bar">
    <div>
        <h2>Login</h2>
    </div>
</header>
<main id="login">
    <form action="#" method="post" class="">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username" placeholder="Username">
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Password">
        </div>

        <div class="form-group">
            <button id="login-button" type="submit" class="">Login</button>
        </div>

    </form>
</main>
<?php include('includes/footer.php');?>
