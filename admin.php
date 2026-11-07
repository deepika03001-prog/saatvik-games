<?php
// Open: admin.php?key=YOUR_ADMIN_KEY  -> shows Saatvik's stars and recent play.
require __DIR__ . '/config.php';
if (!hash_equals(ADMIN_KEY, $_GET['key'] ?? '')) { http_response_code(403); exit('No access'); }
$db = db();
$p = $db->query("SELECT * FROM progress WHERE player='saatvik'")->fetch(PDO::FETCH_ASSOC);
$log = $db->query('SELECT game, stars, played_at FROM game_log ORDER BY id DESC LIMIT 30')->fetchAll(PDO::FETCH_ASSOC);
$names = ['g1'=>'Balloons','g2'=>'Animals','g3'=>'Catch','g4'=>'Shapes','g5'=>'Paint','g6'=>'Puzzle','home'=>'Home'];
?><!DOCTYPE html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Saatvik stats</title>
<body style="font-family:system-ui;max-width:480px;margin:20px auto;padding:0 12px">
<h2>⭐ <?= (int)($p['stars'] ?? 0) ?> stars</h2>
<p>Last played: <?= htmlspecialchars($names[$p['last_game'] ?? 'home'] ?? '-') ?> at <?= htmlspecialchars($p['updated_at'] ?? '-') ?></p>
<table border="1" cellpadding="6" style="border-collapse:collapse;width:100%">
<tr><th>Time</th><th>Game</th><th>Stars</th></tr>
<?php foreach ($log as $r): ?>
<tr><td><?= htmlspecialchars($r['played_at']) ?></td><td><?= htmlspecialchars($names[$r['game']] ?? $r['game']) ?></td><td><?= (int)$r['stars'] ?></td></tr>
<?php endforeach; ?>
</table></body>
