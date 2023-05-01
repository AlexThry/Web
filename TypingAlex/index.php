<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typing Alex</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="titre">
        <h1>Typing Alex</h1>
    </div>
    <div class="text-content">
        <p class="text">
            <?php
                $text = "aapmq:wmmapmqmwpamwpwmqpa";
                for ($i=0; $i<strlen($text); $i++) {
                    $char = $text[$i];
                    if ($i == 0) {
                        echo "<span class='char current'>" . $char . "</span>";
                    } else {
                        echo "<span class='char'>" . $char . "</span>";
                    }
                }
            ?>
        </p>
    </div>
    <div class="content">

    </div>
</body>
<script src="script.js"></script>
</html>