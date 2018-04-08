<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <!-- jQuery UI -->
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link href="https://code.jquery.com/ui/1.12.1/themes/cupertino/jquery-ui.css" rel="stylesheet" type="text/css"/>
    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">

    <!-- FontAwesome -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js"
            integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl"
            crossorigin="anonymous"></script>

    <!-- jQuery mi estilo -->
    <script type="text/javascript" src="js/loginAdmin.js"></script>
    <script type="text/javascript" src="js/consultasAjax.js"></script>
    <script type="text/javascript" src="js/validarForm.js"></script>

    <!-- CSS mi estilo -->
    <link rel="stylesheet" href="style.css">

    <title>homeAdmin</title>
</head>
<body>
<div class="container-fluid">
    <div class="row bg-primary">
        <div class="col-2 text-capitalize align-self-center">
            <a class="btn btn-primary" style="color: whitesmoke;" href="index.html">Salir <i
                        class="fas fa-sign-out-alt"></i></a>
        </div>
        <div class="col-10 text-right">
            <h1 style="color: whitesmoke;">Bienvenido Admin</h1>
        </div>
    </div>
    <div class="container">
        <div class="row mt-5 border-bottom">
            <div class="col">
                <button id="nuevaPregunta" class="btn btn-primary">Nueva pregunta <i class="fas fa-plus"></i></button>
            </div>
            <div class="col">
                <h1>Administración de preguntas</h1>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <table class="table table-striped table-bordered">
                    <thead class="text-center">
                    <tr>
                        <th scope="col">Tema</th>
                        <th scope="col">Enunciado</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                    </thead>
                    <tbody id="preguntaAdmin">
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div id="dialogAdmin" class="col">
                <form id="preguntaEditar" class="form-group">

                </form>
            </div>
        </div>
    </div>
</div>
</body>
</html>