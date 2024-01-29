


DROP TABLE IF EXISTS `supermercado`;
CREATE TABLE IF NOT EXISTS `supermercado` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Seccion` varchar(30) NOT NULL,
  `Numero` int(8) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;



INSERT INTO `supermercado` (`Id`, `Seccion`, `Numero`) VALUES
(1, 'Pescaderia', 189),
(2, 'Carniceria', 44),
(5, 'Embutidos', 123),
(6, 'Pasteleria', 34);
--
-- Índices para tablas volcadas
--





