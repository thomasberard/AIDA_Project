const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// La clé n'est jamais stockée en clair dans le code source : elle est
// encodée en base64 et décodée uniquement au démarrage du serveur, en
// mémoire, pour être injectée dans la page HTML affichée à l'utilisateur.
const ENCODED_KEY = "QUlEQS1OT0RFLTdGM0s5";

function decodeKey(encoded) {
  return Buffer.from(encoded, "base64").toString("utf-8");
}

const ACCESS_KEY = decodeKey(ENCODED_KEY);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>AIDA Project — Accès</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0D1117;
      font-family: 'Courier New', monospace;
      color: #E6EDF3;
    }
    .card {
      background: #161B22;
      border: 1px solid #30363D;
      border-radius: 10px;
      padding: 40px 48px;
      text-align: center;
      max-width: 420px;
    }
    .status {
      color: #3FB950;
      font-size: 13px;
      letter-spacing: 1px;
      margin-bottom: 18px;
    }
    h1 {
      font-size: 18px;
      margin: 0 0 24px;
      color: #C9D1D9;
      font-weight: normal;
    }
    .key-box {
      background: #0D1117;
      border: 1px solid #B08D57;
      border-radius: 6px;
      padding: 16px;
      font-size: 20px;
      font-weight: bold;
      color: #B08D57;
      letter-spacing: 2px;
      margin-bottom: 16px;
    }
    p {
      font-size: 12px;
      color: #6E7681;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="status">&#9679; SERVEUR ACTIF</div>
    <h1>Clé d'accès récupérée avec succès</h1>
    <div class="key-box">${ACCESS_KEY}</div>
    <p>Copiez cette clé et renseignez-la sur le site de l'escape game.</p>
  </div>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Serveur AIDA Project démarré sur http://localhost:${PORT}`);
});
