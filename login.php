<?php include_once 'header.php'; ?>

<h1 class="maintitle">gSpring</h1>

<h2>Login:</h2>
<form class="form-horizontal" action="" method="post" role="form">
    <div class="form-group">
        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-7">
            <input type="text" class="form-control" id="username" name="username" placeholder="utilizador">
        </div>
    </div>
    <div class="form-group">
        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-7">
            <input type="password" class="form-control" id="password" name="password" placeholder="password">
        </div>
    </div>
    <div class="form-group">
        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-7">
            <button type="submit" class="btn btn-default">Submeter</button>
        </div>
    </div>
</form>

<?php include_once 'footer.php'; ?>