<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Auto Ecole Azzaoui</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="style.css">
</head>
<body>

<header class="header">
  <img src="logo.png" class="logo">
  <nav>
    <a href="#home">Accueil</a>
    <a href="#services">Services</a>
    <a href="#pricing">Tarifs</a>
    <a href="#about">À propos</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section id="home" class="hero">
  <h1>Auto Ecole Azzaoui</h1>
  <p>Votre réussite au permis commence ici.</p>
  <a class="btn" href="#contact">Réserver une leçon</a>
</section>

<section id="services" class="section">
  <h2>Nos Services</h2>
  <ul>
    <li>Leçons de conduite pour débutants</li>
    <li>Préparation à l'examen pratique</li>
    <li>Préparation à l'examen théorique</li>
    <li>Conduite sur boîte automatique</li>
    <li>Conduite sur boîte manuelle</li>
  </ul>
</section>

<section id="pricing" class="section">
  <h2>Tarifs</h2>
  <table>
    <tr><th>Forfait</th><th>Prix</th><th>Détails</th></tr>
    <tr><td>Débutant</td><td>€25</td><td>Leçon de 60 minutes</td></tr>
    <tr><td>Avancé</td><td>€30</td><td>Entraînement intensif</td></tr>
    <tr><td>Examen</td><td>€40</td><td>Simulation d'examen</td></tr>
    <tr><td>Complet</td><td>€399</td><td>15 leçons + examen blanc</td></tr>
  </table>
</section>

<section id="about" class="section">
  <h2>À propos</h2>
  <p>
    Auto Ecole Azzaoui est une école de conduite professionnelle offrant des cours adaptés à tous les niveaux.
    Nos instructeurs expérimentés vous accompagnent jusqu'à l'obtention de votre permis avec confiance et sécurité.
  </p>
</section>

<section id="contact" class="section">
  <h2>Contact</h2>
  <p>Téléphone : 06xxxxxxxx</p>
  <p>Email : info@autoecoleazzaoui.com</p>
  <p>Adresse : Emmeloord, Pays-Bas</p>
</section>

<footer class="footer">
  © 2026 Auto Ecole Azzaoui — Tous droits réservés
</footer>

</body>
</html>
body {margin:0; font-family:Arial; background:#fff; color:#111;}
.header {display:flex; justify-content:space-between; align-items:center; padding:20px; background:#000;}
.logo {height:60px;}
nav a {color:#fff; margin:0 15px; text-decoration:none; font-weight:bold;}
.hero {background:#e00000; color:#fff; padding:100px 20px; text-align:center;}
.btn {background:#000; color:#fff; padding:10px 20px; border-radius:5px; text-decoration:none;}
.section {padding:40px; max-width:900px; margin:auto;}
.section h2 {color:#e00000;}
table {width:100%; border-collapse:collapse;}
th, td {border:1px solid #ccc; padding:10px; text-align:center;}
.footer {background:#000; color:#fff; text-align:center; padding:20px;}
logo.png
