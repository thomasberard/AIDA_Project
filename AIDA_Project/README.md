# AIDA Project

Petit serveur local de récupération d'accès, dans le cadre du projet AIDA.

## Prérequis

- [Node.js](https://nodejs.org/) version 18 ou supérieure (Node.js inclut `npm` automatiquement)
- Une connexion internet le temps de l'installation (pour télécharger les dépendances)

Pour vérifier que Node.js est bien installé sur votre machine, ouvrez un terminal et tapez :

```bash
node --version
```

Si une version s'affiche (ex: `v20.11.0`), c'est bon. Sinon, téléchargez et installez Node.js depuis [nodejs.org](https://nodejs.org/) (choisissez la version "LTS").

## Installation

1. Récupérez le projet, soit en le téléchargeant depuis GitHub (bouton **Code > Download ZIP** puis décompressez l'archive), soit en le clonant si vous avez `git` d'installé :

```bash
git clone https://github.com/thomasberard/AIDA_Project.git
cd AIDA_Project
```

2. Installez les dépendances du projet :

```bash
npm install
```

Cette commande télécharge et installe automatiquement tout ce dont le projet a besoin pour fonctionner (ça peut prendre quelques dizaines de secondes).

## Lancement

Une fois l'installation terminée, démarrez le serveur avec :

```bash
npm start
```

Vous devriez voir s'afficher dans le terminal :

```
Serveur AIDA Project démarré sur http://localhost:3000
```

Ouvrez ensuite votre navigateur web et rendez-vous à l'adresse :

**http://localhost:3000**

La page affichera la clé d'accès à recopier sur le site de l'escape game.

## Arrêter le serveur

Pour arrêter le serveur, retournez dans le terminal où il tourne et appuyez sur `Ctrl + C`.

## En cas de problème

- **`node: command not found`** — Node.js n'est pas installé ou pas reconnu par votre terminal. Réinstallez-le depuis [nodejs.org](https://nodejs.org/) et redémarrez votre terminal.
- **Erreur lors de `npm install`** — Vérifiez votre connexion internet, puis réessayez.
- **Le port 3000 est déjà utilisé** — Fermez toute autre application qui utiliserait déjà ce port, ou redémarrez votre ordinateur.
