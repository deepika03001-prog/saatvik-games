# Saatvik's Games

Six games for a 4-year-old: Puzzle, Balloons, Animals, Catch, Shapes, Paint.
Plain HTML + CSS + JavaScript on the front end. PHP + MySQL only for saving stars (optional).

## Files
- index.html, style.css, game.js  -> the game
- images/faces, balloons, puzzle   -> all photos (replace any file, keep the same name)
- config.php, api.php, admin.php, schema.sql -> optional MySQL star saving

## Quick start (no database)
Upload the whole folder to your hosting (example: saatvik.yourdomain.in) and open index.html there.
Stars are saved in the browser on his device.

## Save stars in MySQL (so you can see them)
1. Create a MySQL database and run schema.sql in it (phpMyAdmin -> Import).
2. Edit config.php: DB_NAME, DB_USER, DB_PASS and ADMIN_KEY.
3. Open https://yourdomain/admin.php?key=YOUR_ADMIN_KEY to see his stars and recent play.

## Change things
- Child's name: NAME in game.js (search NAME = 'Saatvik').
- Balloon photos: add .jpg files to images/balloons and add the path to the PICS list in game.js.
- Animal sounds: the animals list in the Animals game section of game.js.
