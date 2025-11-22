-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2025 at 10:16 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `entrega4_php`
--

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `genero` varchar(150) DEFAULT NULL,
  `ano` varchar(20) DEFAULT NULL,
  `capa` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `nome`, `genero`, `ano`, `capa`) VALUES
(1, 'Valorant', 'FPS Tático', '2020', 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg'),
(3, 'PES (Pro Evolution Soccer)', 'Esportes / Futebol', '2001', 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Logo_Pes2021.png'),
(4, 'Free Fire', 'Battle Royal', '2017', 'https://www.citypng.com/public/uploads/preview/black-free-fire-logo-battlegrounds-701751694791339oqbtmpmrcx.png'),
(5, 'Minecraft', 'Sandbox / Aventura', '2011', 'https://cdn2.steamgriddb.com/icon/725215ed82ab6306919b485b81ff9615/32/256x256.png'),
(6, 'Silent Hill', 'Terror / Sobrevivência', '1999', 'https://images.seeklogo.com/logo-png/20/1/silent-hill-logo-png_seeklogo-202462.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
