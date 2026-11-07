<?php
// Saves and loads Saatvik's stars. Used by game.js.
require __DIR__ . '/config.php';
header('Content-Type: application/json');
$player = 'saatvik';
try { $db = db(); } catch (Exception $e) { http_response_code(500); echo json_encode(['error' => 'db']); exit; }

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $in = json_decode(file_get_contents('php://input'), true) ?: [];
    $stars = max(0, min(1000000, (int)($in['stars'] ?? 0)));
    $game = in_array($in['game'] ?? '', ['home','g1','g2','g3','g4','g5','g6'], true) ? $in['game'] : 'home';
    $db->prepare('INSERT INTO progress (player, stars, last_game) VALUES (?,?,?)
                  ON DUPLICATE KEY UPDATE stars = GREATEST(stars, VALUES(stars)), last_game = VALUES(last_game)')
       ->execute([$player, $stars, $game]);
    $db->prepare('INSERT INTO game_log (player, game, stars) VALUES (?,?,?)')->execute([$player, $game, $stars]);
    echo json_encode(['ok' => true]);
    exit;
}
$q = $db->prepare('SELECT stars, last_game, updated_at FROM progress WHERE player = ?');
$q->execute([$player]);
echo json_encode($q->fetch(PDO::FETCH_ASSOC) ?: ['stars' => 0]);
