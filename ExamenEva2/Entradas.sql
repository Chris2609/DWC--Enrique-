-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 06-02-2018 a las 22:14:42
-- Versión del servidor: 5.7.19-0ubuntu0.16.04.1
-- Versión de PHP: 7.0.26-2+ubuntu16.04.1+deb.sury.org+2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `enrique`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Entradas`
--

DROP TABLE IF EXISTS `Entradas`;
CREATE TABLE IF NOT EXISTS `Entradas` (
  `idFila` int(11) NOT NULL,
  `Ocupacion` varchar(10) COLLATE utf8_spanish_ci NOT NULL DEFAULT '0000000000',
  UNIQUE KEY `idFila` (`idFila`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `Entradas`
--

INSERT INTO `Entradas` (`idFila`, `Ocupacion`) VALUES
(0, '0000000100'),
(1, '0000000000'),
(2, '0000000000'),
(3, '1011001110'),
(4, '1010010011'),
(5, '0000000000'),
(6, '0000111111'),
(7, '0000000000'),
(8, '0000000000'),
(9, '1111110010');
