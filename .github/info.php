<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        .card {
            background: #f4f4f4;
            padding: 20px;
            border-radius: 10px;
            width: 400px;
        }
    </style>
</head>
<body>

<h1>Page PHP — Informations</h1>

<div class="card">

<?php
$etablissement = "Université  Cadi Ayyad";
$module = "Développement Web";
$annee = 2025;

$a = 12;
$b = 8;

$addition = $a + $b;
$multiplication = $a * $b;

echo "<p><strong>Établissement :</strong> $etablissement</p>";
echo "<p><strong>Module :</strong> $module</p>";
echo "<p><strong>Année :</strong> $annee</p>";

echo "<hr>";

echo "<p>Exemple de variables numériques :</p>";
echo "<p>A = $a</p>";
echo "<p>B = $b</p>";

echo "<p>Addition : $a + $b = $addition</p>";
echo "<p>Multiplication : $a × $b = $multiplication</p>";
?>

</div>

</body>
</html>