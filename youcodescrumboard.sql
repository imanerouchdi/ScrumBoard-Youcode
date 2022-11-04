-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 04 nov. 2022 à 09:44
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `youcodescrumboard`
--

-- --------------------------------------------------------

--
-- Structure de la table `priorities`
--

CREATE TABLE `priorities` (
  `id_priorities` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `priorities`
--

INSERT INTO `priorities` (`id_priorities`, `name`) VALUES
(1, 'low'),
(2, 'high'),
(3, 'medium'),
(4, 'Critical');

-- --------------------------------------------------------

--
-- Structure de la table `statuses`
--

CREATE TABLE `statuses` (
  `id_statuses` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `statuses`
--

INSERT INTO `statuses` (`id_statuses`, `name`) VALUES
(1, 'To Do'),
(2, 'In Progress'),
(3, 'Done');

-- --------------------------------------------------------

--
-- Structure de la table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `id_type` int(11) NOT NULL,
  `id_priority` int(11) NOT NULL,
  `id_status` int(11) NOT NULL,
  `task_datetime` date NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `id_type`, `id_priority`, `id_status`, `task_datetime`, `description`) VALUES
(109, 'Aut dolorum sunt qu', 2, 2, 2, '2015-11-11', 'Dolores consequat N'),
(111, 'Sequi magna mollitia', 2, 4, 2, '1981-12-28', 'Rerum sit molestiae '),
(112, 'Ut perspiciatis exp', 1, 1, 2, '2021-11-14', 'Vel in sunt culpa l'),
(119, 'Voluptatem molestiae', 1, 1, 3, '1984-11-23', 'Eiusmod ducimus ea '),
(120, 'Voluptatem molestiae', 1, 1, 3, '1984-11-23', 'Eiusmod ducimus ea '),
(121, 'Voluptatem molestiae', 1, 1, 3, '1984-11-23', 'Eiusmod ducimus ea '),
(122, 'Voluptatem molestiae', 1, 1, 3, '1984-11-23', 'Eiusmod ducimus ea '),
(123, 'Voluptatem molestiae', 1, 1, 3, '1984-11-23', 'Eiusmod ducimus ea '),
(124, 'Voluptatem molestiae', 1, 1, 3, '1984-11-23', 'Eiusmod ducimus ea ');

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

CREATE TABLE `type` (
  `id_type` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id_type`, `name`) VALUES
(1, 'feature'),
(2, 'big');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `priorities`
--
ALTER TABLE `priorities`
  ADD PRIMARY KEY (`id_priorities`);

--
-- Index pour la table `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`id_statuses`);

--
-- Index pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_priorites` (`id_priority`),
  ADD KEY `id_status` (`id_status`),
  ADD KEY `id_types` (`id_type`);

--
-- Index pour la table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id_type`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `priorities`
--
ALTER TABLE `priorities`
  MODIFY `id_priorities` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `statuses`
--
ALTER TABLE `statuses`
  MODIFY `id_statuses` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT pour la table `type`
--
ALTER TABLE `type`
  MODIFY `id_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `id_priorites` FOREIGN KEY (`id_priority`) REFERENCES `priorities` (`id_priorities`),
  ADD CONSTRAINT `id_status` FOREIGN KEY (`id_status`) REFERENCES `statuses` (`id_statuses`),
  ADD CONSTRAINT `id_types` FOREIGN KEY (`id_type`) REFERENCES `type` (`id_type`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
