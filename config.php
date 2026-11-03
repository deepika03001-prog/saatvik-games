<?php
// Edit these 5 values.
const DB_HOST = 'localhost';
const DB_NAME = 'saatvik_games';
const DB_USER = 'your_db_user';
const DB_PASS = 'your_db_password';
const ADMIN_KEY = 'change-this-secret';   // used to open admin.php?key=...

function db() {
    return new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4', DB_USER, DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
}
