#                                           ECE Blog

ECE Blog est une plateforme de blogging conçue pour permettre de partager et d'échanger sur des sujets tel que le sport, la technologie, la santé et l'actualité.

## Prérequis
Avant de commencer, assurez-vous d'avoir satisfait aux exigences suivantes :
* Vous avez installé la dernière version de `Node.js` et `npm`.
* Vous disposez d'une machine `Windows/Linux/Mac`. Tous les systèmes d'exploitation sont pris en charge.

## Exécution de l'application localement

    Node.js (Version : >=18.x)
    Gestionnaire de packages Node (NPM) - inclus dans Node.js
    PostgreSQL (local ou distant)

Suivez ces étapes :

Clonez le dépôt sur votre appareil local.

    git clone ...

Configurez votre Base de données Supabase et l'Authentification avec les Connexions Sociales

Configurez votre fichier .env en suivant les recommandations du fichier .env.example.

Exécutez npm installation dans le répertoire racine

    npm installation --legacy-peer-deps

Exécutez npm run dev dans le répertoire racine

Vous devriez maintenant pouvoir accéder à l'application à l'adresse http://localhost:3000

## Schéma de base de donnée
<img width="992" alt="Screenshot 2023-06-10 at 10 00 18 PM" src="https://github.com/timtbdev/Next.js-Blog-App/assets/25026241/729e2d22-2467-4d5b-9c6c-e6a5ea58c717">

## Technologiques utilisés
    Composants serveur et client
    Récupération et insertion de données en utilisant Supabase-JS-Client
    Routes d'API et intergiciels (middlewares)
    Authentification basée sur les cookies en utilisant Supabase Auth
    CMS en utilisant Base de données Supabase
    Style avec Tailwind CSS
    Rédigé en TypeScript

## Qualité du Code
    TypeScript
    Prettier
    ESLint

Pour contribuer à ECE Blog, suivez ces étapes :

    Forkez ce dépôt.
    Créez une branche : git checkout -b nom_de_votre_branche.
    Faites vos changements et commitez-les : git commit -m 'Ajout de ma fonctionnalité'
    Poussez vers la branche originale : git push origin ECE-Blog/nom_de_votre_branche
    Créez la pull request.

## Informations supplémentaires

Nous avons eu un conflit lors d'un push avec le dossier client et difficultés à envoyer les requêtes aux serveur

## Contributeurs qui ont contribué à ECE Blog !
SIPEHOU Muriel
MJAHED Noura
KHIAS Meryem
