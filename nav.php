<?php
echo(
'
<nav class="navbar navbar-default navbar-fixed-top" id="navbar">
    <div class="container-fluid">

                <div class="navbar-header" id="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#topnav" id="mobnavbutton">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="topnav">
                        <ul class="nav navbar-nav">
                            <li class="navbar-header" id="navbar-header">
                            <span class="navbar-brand" style="padding: 0 10px 0 0;">
                                <a href="#home"><img src="images/logo.png" class="logo" alt="Trofeo &#34;Francesco Verduci&#34; LOGO"></a>
                            </span>
                            </li>
                            <li class="hide-mobile"><a href="#notizie">Ultime notizie</a></li>
                            <li class="hide-mobile"><a href="#iltrofeo">Il trofeo</a></li>
                            <li class="hide-mobile"><a href="#fotogallery">Fotogallery</a></li>
                            <li class="hide-mobile"><a href="#percorso">Percorso</a></li>
                            <li class="hide-mobile"><a href="#rassegna">Rassegna stampa</a></li>
                            <li class="dropdown" style="margin-top: auto; margin-bottom: auto;">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                <span class="glyphicon glyphicon-plus visible-sm">
                                </span>
                                <div class="hidden-sm">More info <span class="caret"></span></div></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="trofeo.php">Storia del trofeo</a></li>
                                        <li><a href="verduci.php">Francesco Verduci</a></li>
                                        <li><a href="interviste.php">Interviste</a></li>
                                        <li><a href="videogallery.php">Videogallery</a></li>
                                        <li><a href="mission.php">Un progetto benefico</a></li>
                                        <li><a href="albo-d-oro.php">Albo d&#39;oro</a></li>
                                        <li><a href="arhiva-rassegna-stampa.php">Arhiva rassegna stampa</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
        </nav>
'
);
?>
