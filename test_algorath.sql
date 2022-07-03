-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 26-06-2022 a las 23:32:38
-- Versión del servidor: 8.0.28-0ubuntu0.20.04.3
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test_algorath`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `connected`
--

CREATE TABLE `connected` (
  `id` mediumint NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `connected`
--

INSERT INTO `connected` (`id`, `first_name`, `last_name`) VALUES
(1, 'Michael', 'Lawson'),
(2, 'Lindsay', 'Ferguson'),
(3, 'Tobias', 'Funke'),
(4, 'Byron', 'Fields'),
(5, 'George', 'Edwards'),
(6, 'Rachel', 'Howell'),
(7, 'Francis', 'Leeworth'),
(8, 'Marian', 'Jhonson'),
(9, 'Thomas', 'Scott'),
(10, 'Carmen', 'Cardenas'),
(11, 'Javi', 'Rivas'),
(12, 'Nacho', 'Lopez'),
(14, 'Luis', 'Lopez'),
(15, 'Pedro', 'Lopez'),
(16, 'Pedro', 'Piqueras');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `connections`
--

CREATE TABLE `connections` (
  `users_id` mediumint NOT NULL,
  `connected_id` mediumint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `connections`
--

INSERT INTO `connections` (`users_id`, `connected_id`) VALUES
(1, 3),
(1, 4),
(2, 1),
(2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` mediumint NOT NULL,
  `first_name` char(30) NOT NULL,
  `last_name` char(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`) VALUES
(1, 'Michael', 'Lawson'),
(2, 'Lindsay', 'Ferguson'),
(3, 'Tobias', 'Funke'),
(4, 'Byron', 'Fields'),
(5, 'George', 'Edwards'),
(6, 'Rachel', 'Howell'),
(7, 'Francis', 'Leeworth'),
(8, 'Marian', 'Jhonson'),
(9, 'Thomas', 'Scott'),
(10, 'Carmen', 'Cardenas'),
(11, 'Javi', 'Rivas'),
(12, 'Nacho', 'Lopez'),
(14, 'Luis', 'Lopez'),
(15, 'Pedro', 'Lopez'),
(16, 'Pedro', 'Piqueras'),
(17, 'Luis', 'Primero'),
(18, 'jajajaja', 'jajajajad'),
(19, 'Luis', 'Segundo'),
(20, 'Luis', 'Segundo'),
(21, 'Luis', 'tercero'),
(22, 'Luis', 'tercero'),
(23, 'alegria', 'alegria'),
(24, 'Viva', 'la vida'),
(25, 'Hola', 'quetal'),
(26, 'sdfsdf', 'erwfwrgwr'),
(27, 'qwe3rwerrynrh', 'eee'),
(28, 'olga', 'Conde');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `connected`
--
ALTER TABLE `connected`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `connections`
--
ALTER TABLE `connections`
  ADD KEY `connections_ibfk_1` (`users_id`),
  ADD KEY `connections_ibfk_2` (`connected_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `connected`
--
ALTER TABLE `connected`
  MODIFY `id` mediumint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` mediumint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `connections`
--
ALTER TABLE `connections`
  ADD CONSTRAINT `connections_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `connections_ibfk_2` FOREIGN KEY (`connected_id`) REFERENCES `connected` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
