<?php include('includes/header.php');?>
<header>
    <img class="top-img" src="img/canon-seattle-about.jpg" alt="Canon Seattle bar">
    <div>
        <h2>Admin</h2>
    </div>
</header>
<main id="admin-page">
    <form action="#" method="post" class="">
        <div class="form-group" id="adminSelector">
            <label for="pageSelection">Select a page:</label>
            <select name="page-select">
                <option value="null"></option>
                <option value="about">About</option>
                <option value="awards">Awards</option>
                <option value="menu">Menu</option>
            </select>
        </div>
    </form>

    <div id="tableContent">


    </div>


</main>
<?php include('includes/footer.php');?>
