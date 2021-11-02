# Blog-API
## mode dev ##
### clone project blog-API ###
- git clone https://github.com/AmineKotti/Blog-API
 
### Add database in phpMyAdmin
* Open http://localhost:9080/


### add table comment in database blogdb
```bash
-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 01 nov. 2021 à 21:29
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `blogdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `text` text DEFAULT NULL,
  `date` int(11) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idPost` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `text`, `date`, `idUser`, `idPost`) VALUES
(1, 'comment 1', 12, 5, 1),
(2, 'com2', 2, 3, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;  
```
### add table user in database blogdb
```bash
-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 01 nov. 2021 à 21:30
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `blogdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`) VALUES
(1, 'Alice', 'Smith', 'alice.smith@gmail.com'),
(2, 'Amine', 'Kotti', 'amine.kotti@gamil.com'),
(3, 'manel', 'lokil', 'manel.lokil@gamil.com'),
(4, 'manel', 'lokil', 'manel.lokil@gamil.com'),
(5, 'aa', 'dd', 'aa.dd@gamil.com'),
(6, 'aa', 'dd', 'aa.dd@gamil.com'),
(7, 'nasim', 'dd', 'aa.dd@gamil.com'),
(8, 'newAmine', 'newKotti', 'amine.kotti@gamil.com'),
(9, 'ff', 'ff', 'amine.kotti@gamil.com'),
(10, 'ff', 'ff', 'amine.kotti@gamil.com'),
(11, 'ff', 'ff', 'amine.kotti@gamil.com'),
(12, 'ff', 'ff', 'amine.kotti@gamil.com');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;  
```
### add table post in database blogdb 
```bash
  -- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 01 nov. 2021 à 21:28
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `blogdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`id`, `title`, `description`, `image`, `idUser`) VALUES
(1, 'post1', 'post food', 'ddd', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```

 ### Run Project ###  
* On doit par la suite appeler Dockerfile.dev dans la docker-compose-dev       
#### docker-compose   
 * build docker-compose
 ```bash
docker-compose build   
```
* up docker-compose  
```bash  
docker-compose up -d
```  
## CURL post user:
``` bash
curl --location --request POST 'http://localhost:3000/user' \
--header 'Content-Type: application/json' \
--data-raw '  {
        "firstName": "amine",
        "lastName": "kotti",
        "email": "amine.kotti@gmail.com"
    }'
```   
![GitHub Logo](https://user-images.githubusercontent.com/36281616/139834420-e20bcdcb-3a83-4e9b-a023-3704a3dcc0c2.PNG)



## CURL get user by id :
``` bash
curl --location --request GET 'http://localhost:3000/user/1'
```  
![GitHub Logo](https://user-images.githubusercontent.com/36281616/139834567-f2acaeb7-0157-46d4-89b8-5202b427a299.PNG)


## CURL get post by post id:
``` bash
curl --location --request GET 'http://localhost:3000/post/1'  
```  
![GitHub Logo](https://user-images.githubusercontent.com/36281616/139834742-7b32a924-8c31-4396-a730-82fb1f6d85a8.PNG)

![GitHub Logo](https://user-images.githubusercontent.com/36281616/139834773-abc959d2-44a5-4eb8-9f2b-639edda4122f.PNG)






