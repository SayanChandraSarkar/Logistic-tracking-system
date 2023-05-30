-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 23, 2023 at 12:52 PM
-- Server version: 10.5.19-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u708687426_atn57`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `access` tinyint(1) DEFAULT 1 COMMENT '1:view, 2:view edit, 3:upload, 4:Delete, 5:''-'', 6:Manager, 7:Regional Manager, 8:admin, 9:superadmin',
  `email` varchar(80) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `password` varchar(33) DEFAULT NULL,
  `google` tinyint(1) DEFAULT NULL,
  `name` varchar(40) DEFAULT NULL,
  `dp` varchar(255) DEFAULT NULL,
  `status` varchar(20) DEFAULT 'active',
  `ts` bigint(14) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `access`, `email`, `phone`, `password`, `google`, `name`, `dp`, `status`, `ts`) VALUES
(1, 9, 'ashiqdey@gmail.com', '7002859965', 'e520a1e0d979b4498c5b7da9dbf03ad8', 1, 'Ashiq Dey', 'https://lh3.googleusercontent.com/a-/AOh14GgLqI-fTNEBswdFbWGisnlFuSWNtv7qzA6D5vtFbA=s96-c', 'active', NULL),
(6, 1, 'ashiqdey.web@gmail.com', NULL, 'e520a1e0d979b4498c5b7da9dbf03ad8', 1, 'Ashiq Web', 'https://lh3.googleusercontent.com/a/ALm5wu2EVXpPfxTWfVtcNPXVcQaEdDfOdYqzillP-RcO=s96-c', '1', 1664431794),
(7, 8, 'ssayan025@gmail.com', NULL, 'e520a1e0d979b4498c5b7da9dbf03ad8', 1, 'Sayan Sarkar', NULL, '1', 1679475465000);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `phone` varchar(14) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `resolved` tinyint(1) NOT NULL DEFAULT 0,
  `ts` bigint(14) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `message`, `resolved`, `ts`) VALUES
(4, 'Ashique Kumar Dey', 'ashiqdey@gmail.com', '7002859961', 'dfgfd gd gfdgdf gdfg g dfg fdg', 0, 1662877207000),
(5, 'Sandhan Ch Sarker', 'sarkersandhan97@gmail.com', '8638030131', 'hi i want a callback', 0, 1681551179000),
(6, 'Sandhan Ch Sarker', 'sarkersandhan97@gmail.com', '8638030131', 'Hi want a meassge to deliver', 0, 1681551193000);

-- --------------------------------------------------------

--
-- Table structure for table `couriers`
--

CREATE TABLE `couriers` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `couriers`
--

INSERT INTO `couriers` (`id`, `name`) VALUES
(1, 'Fedex'),
(2, 'UPS'),
(3, 'Blue Dart'),
(4, 'DTDC'),
(9, 'TNT'),
(6, 'Aramex'),
(8, 'DHL');

-- --------------------------------------------------------

--
-- Table structure for table `get_estimate`
--

CREATE TABLE `get_estimate` (
  `id` int(11) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `destination` varchar(100) DEFAULT NULL,
  `weight` varchar(10) DEFAULT NULL,
  `height` varchar(10) DEFAULT NULL,
  `width` varchar(10) DEFAULT NULL,
  `fragile` tinyint(1) DEFAULT NULL,
  `insurance` tinyint(1) DEFAULT NULL,
  `packing` tinyint(1) DEFAULT NULL,
  `express` tinyint(1) DEFAULT NULL,
  `ts` bigint(14) DEFAULT NULL,
  `resolved` tinyint(1) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `get_estimate`
--

INSERT INTO `get_estimate` (`id`, `phone`, `destination`, `weight`, `height`, `width`, `fragile`, `insurance`, `packing`, `express`, `ts`, `resolved`) VALUES
(5, '7002859961', 'bengaluru', '1kg', '12cm', '15cm', 0, 1, 1, 1, 1662877384000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `login_sesions`
--

CREATE TABLE `login_sesions` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `hash` varchar(33) DEFAULT NULL COMMENT 'md5(cookie)',
  `last_login` bigint(14) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `login_sesions`
--

INSERT INTO `login_sesions` (`id`, `user`, `hash`, `last_login`) VALUES
(3, 1, '3941bb15fd2417ee5eb146c84cb4e0d4', 1664373328000),
(4, 1, 'd19ed4eda387d930cdf83b0208faaaeb', 1664373923000),
(17, 6, '5fbae7577cd3f661414d82a89b03c996', 1672996416000),
(18, 6, '9b68ba1ff31909a87e7a010f47cb3bcd', 1673936144000),
(19, 1, '0c3d521de78d5f1f6069a4c06c85286f', 1679475018000),
(21, 7, 'ccefc502d49a48cc2198b23c8de97ff4', 1679475826000),
(22, 7, '70ad072d3513bde69e96ad46ff156e86', 1679673091000);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `type` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1:CONNECTED,\r\n2:TRANSIT,\r\n3:OUT_FOR_DEL,\r\n4:UNDELIVERED,\r\n5:DELIVERED,\r\n6:RTO,\r\n9:Expected delivery,',
  `awb` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `text` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `location` varchar(40) DEFAULT NULL,
  `ts` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `type`, `awb`, `text`, `location`, `ts`) VALUES
(1, 1, '800005136', 'Shipment connected', '', 1664374521840),
(2, 1, '800005136', 'Bagged', 'Goalpara', 1664370900000),
(3, 1, '800005136', 'Reached', 'Goalpara', 1664374560000),
(4, 1, '800006344', 'Shipment connected', '', 1664384627346),
(5, 2, '800006344', 'Bagged', 'Adilabad', 1664384640000),
(6, 5, '12344300', 'Delivered', '', 1659225600000),
(7, 2, '12344301', 'Shipment is on transit', '', 1659312000000),
(8, 1, '12344302', 'Shipment connected', '', 1659398400000),
(9, 1, '12344303', 'Shipment connected', '', 1659484800000),
(10, 3, '12344304', 'Out for delivery', '', 1659571200000),
(11, 5, '12344305', 'Delivered', '', 1659657600000),
(12, 1, '12344306', 'Shipment connected', '', 1659744000000),
(13, 2, '12344307', 'Shipment is on transit', '', 1659830400000),
(14, 1, '12344308', 'Shipment connected', '', 1659916800000),
(15, 6, '12344309', 'Returned', '', 1660003200000),
(16, 3, '12344310', 'Out for delivery', '', 1660089600000),
(17, 5, '12344311', 'Delivered', '', 1660176000000),
(18, 1, '12344312', 'Shipment connected', '', 1660262400000),
(19, 2, '12344313', 'Shipment is on transit', '', 1660348800000),
(20, 1, '12344314', 'Shipment connected', '', 1660521600000),
(21, 6, '12344315', 'Returned', '', 1660521600000),
(22, 3, '12344316', 'Out for delivery', '', 1660521600000),
(23, 5, '12344317', 'Delivered', '', 1660521600000),
(24, 5, '12344318', 'Delivered', '', 1660521600000),
(25, 5, '12344319', 'Delivered', '', 1660608000000),
(26, 2, '12344320', 'Shipment is on transit', '', 1660608000000),
(27, 1, '12344321', 'Shipment connected', '', 1660780800000),
(28, 1, '12344322', 'Shipment connected', '', 1660780800000),
(29, 3, '12344323', 'Out for delivery', '', 1660780800000),
(30, 5, '12344324', 'Delivered', '', 1660953600000),
(31, 1, '12344325', 'Shipment connected', '', 1660953600000),
(32, 2, '12344326', 'Shipment is on transit', '', 1660953600000),
(33, 1, '12344327', 'Shipment connected', '', 1661040000000),
(34, 6, '12344328', 'Returned', '', 1661126400000),
(35, 3, '12344329', 'Out for delivery', '', 1661126400000),
(36, 5, '12344330', 'Delivered', '', 1661126400000),
(37, 1, '12344331', 'Shipment connected', '', 1661126400000),
(38, 2, '12344332', 'Shipment is on transit', '', 1661126400000),
(39, 1, '12344333', 'Shipment connected', '', 1661212800000),
(40, 6, '12344334', 'Returned', '', 1661212800000),
(41, 3, '12344335', 'Out for delivery', '', 1661212800000),
(42, 5, '12344336', 'Delivered', '', 1661212800000),
(43, 5, '12344337', 'Delivered', '', 1661299200000),
(44, 5, '12344338', 'Delivered', '', 1661299200000),
(45, 2, '12344339', 'Shipment is on transit', '', 1661299200000),
(46, 1, '12344340', 'Shipment connected', '', 1661299200000),
(47, 1, '12344341', 'Shipment connected', '', 1661385600000),
(48, 3, '12344342', 'Out for delivery', '', 1661385600000),
(49, 5, '12344343', 'Delivered', '', 1661385600000),
(50, 1, '12344344', 'Shipment connected', '', 1661472000000),
(51, 2, '12344345', 'Shipment is on transit', '', 1661472000000),
(52, 1, '12344346', 'Shipment connected', '', 1661558400000),
(53, 6, '12344347', 'Returned', '', 1661558400000),
(54, 3, '12344348', 'Out for delivery', '', 1661558400000),
(55, 5, '12344349', 'Delivered', '', 1661558400000),
(56, 1, '12344350', 'Shipment connected', '', 1661558400000),
(57, 2, '12344351', 'Shipment is on transit', '', 1661558400000),
(58, 1, '12344352', 'Shipment connected', '', 1663632000000),
(59, 6, '12344353', 'Returned', '', 1663632000000),
(60, 3, '12344354', 'Out for delivery', '', 1663718400000),
(63, 5, '12344357', 'Delivered', '', 1663977600000),
(64, 2, '12344358', 'Shipment is on transit', '', 1663977600000),
(66, 1, '12344360', 'Shipment connected', '', 1663977600000),
(67, 3, '12344361', 'Out for delivery', '', 1663977600000),
(68, 5, '12344362', 'Delivered', '', 1664064000000),
(69, 1, '12344363', 'Shipment connected', '', 1664064000000),
(70, 2, '12344364', 'Shipment is on transit', '', 1664150400000),
(71, 1, '12344365', 'Shipment connected', '', 1664150400000),
(72, 6, '12344366', 'Returned', '', 1664150400000),
(73, 3, '12344367', 'Out for delivery', '', 1664150400000),
(74, 5, '12344368', 'Delivered', '', 1664150400000),
(75, 1, '12344369', 'Shipment connected', '', 1664150400000),
(76, 2, '12344370', 'Shipment is on transit', '', 1664236800000),
(77, 1, '12344371', 'Shipment connected', '', 1664236800000),
(78, 6, '12344372', 'Returned', '', 1664236800000),
(79, 3, '12344373', 'Out for delivery', '', 1664236800000),
(80, 5, '12344374', 'Delivered', '', 1664236800000),
(81, 5, '12344375', 'Delivered', '', 1664236800000);

-- --------------------------------------------------------

--
-- Table structure for table `status_map`
--

CREATE TABLE `status_map` (
  `id` int(11) NOT NULL,
  `label` varchar(20) NOT NULL,
  `value` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `status_map`
--

INSERT INTO `status_map` (`id`, `label`, `value`) VALUES
(1, 'CONNECTED', 'Connected'),
(2, 'TRANSIT', 'Transit'),
(3, 'OUT_FOR_DEL', 'Out for delivery'),
(4, 'UNDELIVERED', 'Undelivered'),
(5, 'DELIVERED', 'Delevered'),
(6, 'RTO', 'Return to  origin');

-- --------------------------------------------------------

--
-- Table structure for table `tracking`
--

CREATE TABLE `tracking` (
  `id` int(11) NOT NULL,
  `dated` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '2022-05-20',
  `awb` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `forwarding_no` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `courier` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `sender` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `receiver` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `destination` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `content` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `pack` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `wt` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `dwt` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `vendor` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `status` tinyint(201) DEFAULT 1 COMMENT '1:CONNECTED,\r\n2:TRANSIT,\r\n3:OUT_FOR_DEL,\r\n4:UNDELIVERED,\r\n5:DELIVERED,\r\n6:RTO,',
  `ts_created` bigint(14) DEFAULT NULL,
  `ts_updated` bigint(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tracking`
--

INSERT INTO `tracking` (`id`, `dated`, `awb`, `forwarding_no`, `courier`, `sender`, `receiver`, `destination`, `content`, `pack`, `wt`, `dwt`, `vendor`, `status`, `ts_created`, `ts_updated`) VALUES
(1, '2022-09-28', '800005136', '46456601', 'DTDC', 'ashiq', 'abhisek', 'bapujinagar, goalpara', 'document', '1', '1', '1', 'DTDC', 3, 1664374521840, 1664374979000),
(2, '2022-09-28', '800006344', '46456601', 'UPS', 'ashiq', 'abhisek', 'bapujinagar, goalpara', 'document', '1', '1', '1', 'UPS', 6, 1664384627346, 1664384664000),
(3, '2022-07-31', '12344300', '46456700', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1659225600000, 1659657600000),
(4, '2022-08-01', '12344301', '46456701', 'DTDC', 'Gaddam Kumar', 'Pravesh Jain', 'Indore-452009', 'DONGLE', '1', '0.5', '0.5', 'DTDC', 2, 1659312000000, 1659744000000),
(5, '2022-08-02', '12344302', '46456702', 'UPS', 'Omega Healthcare', 'Navya', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'UPS', 1, 1659398400000, 1659744000000),
(6, '2022-08-03', '12344303', '46456703', 'Fedex', 'Pravesh Jain', 'Gaddam Kumar', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'Fedex', 1, 1659484800000, 1659916800000),
(7, '2022-08-04', '12344304', '46456704', 'Blue Dart', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'Blue Dart', 3, 1659571200000, 1659830400000),
(8, '2022-08-05', '12344305', '46456705', 'DHL', 'Deepti', 'Navya', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1659657600000, 1660089600000),
(9, '2022-08-06', '12344306', '46456706', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 1, 1659744000000, 1660089600000),
(10, '2022-08-07', '12344307', '46456707', 'DTDC', 'Gaddam Kumar', 'Pravesh Jain', 'Indore-452009', 'DONGLE', '1', '0.5', '0.5', 'DTDC', 2, 1659830400000, 1660176000000),
(11, '2022-08-08', '12344308', '46456708', 'UPS', 'Omega Healthcare', 'Navya', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'UPS', 1, 1659916800000, 1660435200000),
(12, '2022-08-09', '12344309', '46456709', 'Fedex', 'Pravesh Jain', 'Gaddam Kumar', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'Fedex', 6, 1660003200000, 1660521600000),
(13, '2022-08-10', '12344310', '46456710', 'Blue Dart', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'Blue Dart', 3, 1660089600000, 1660348800000),
(14, '2022-08-11', '12344311', '46456711', 'DHL', 'Deepti', 'Navya', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1660176000000, 1660435200000),
(15, '2022-08-12', '12344312', '46456712', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 1, 1660262400000, 1660521600000),
(16, '2022-08-13', '12344313', '46456713', 'DTDC', 'Gaddam Kumar', 'Pravesh Jain', 'Indore-452009', 'DONGLE', '1', '0.5', '0.5', 'DTDC', 2, 1660348800000, 1660867200000),
(17, '2022-08-15', '12344314', '46456714', 'UPS', 'Omega Healthcare', 'Navya', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'UPS', 1, 1660521600000, 1661040000000),
(18, '2022-08-15', '12344315', '46456715', 'Fedex', 'Pravesh Jain', 'Gaddam Kumar', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'Fedex', 6, 1660521600000, 1660867200000),
(19, '2022-08-15', '12344316', '46456716', 'Blue Dart', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'Blue Dart', 3, 1660521600000, 1661040000000),
(20, '2022-08-15', '12344317', '46456717', 'DHL', 'Deepti', 'Navya', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1660521600000, 1660780800000),
(21, '2022-08-15', '12344318', '46456718', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1660521600000, 1660867200000),
(22, '2022-08-16', '12344319', '46456719', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1660608000000, 1661040000000),
(23, '2022-08-16', '12344320', '46456720', 'DTDC', 'Gaddam Kumar', 'Pravesh Jain', 'Indore-452009', 'DONGLE', '1', '0.5', '0.5', 'DTDC', 2, 1660608000000, 1660953600000),
(24, '2022-08-18', '12344321', '46456721', 'UPS', 'Omega Healthcare', 'Navya', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'UPS', 1, 1660780800000, 1661040000000),
(25, '2022-08-18', '12344322', '46456722', 'Fedex', 'Pravesh Jain', 'Gaddam Kumar', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'Fedex', 1, 1660780800000, 1661040000000),
(26, '2022-08-18', '12344323', '46456723', 'Blue Dart', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'Blue Dart', 3, 1660780800000, 1661040000000),
(27, '2022-08-20', '12344324', '46456724', 'DHL', 'Deepti', 'Navya', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1660953600000, 1661212800000),
(28, '2022-08-20', '12344325', '46456725', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 1, 1660953600000, 1661385600000),
(29, '2022-08-20', '12344326', '46456726', 'DTDC', 'Gaddam Kumar', 'Pravesh Jain', 'Indore-452009', 'DONGLE', '1', '0.5', '0.5', 'DTDC', 2, 1660953600000, 1661385600000),
(30, '2022-08-21', '12344327', '46456727', 'UPS', 'Omega Healthcare', 'Navya', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'UPS', 1, 1661040000000, 1661299200000),
(31, '2022-08-22', '12344328', '46456728', 'Fedex', 'Pravesh Jain', 'Gaddam Kumar', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'Fedex', 6, 1661126400000, 1661472000000),
(32, '2022-08-22', '12344329', '46456729', 'Blue Dart', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'Blue Dart', 3, 1661126400000, 1661558400000),
(33, '2022-08-22', '12344330', '46456730', 'DHL', 'Deepti', 'Navya', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1661126400000, 1661644800000),
(34, '2022-08-22', '12344331', '46456731', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 1, 1661126400000, 1661644800000),
(35, '2022-08-22', '12344332', '46456732', 'DTDC', 'Gaddam Kumar', 'Pravesh Jain', 'Indore-452009', 'DONGLE', '1', '0.5', '0.5', 'DTDC', 2, 1661126400000, 1661558400000),
(36, '2022-08-23', '12344333', '46456733', 'UPS', 'Omega Healthcare', 'Navya', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'UPS', 1, 1661212800000, 1661644800000),
(37, '2022-08-23', '12344334', '46456734', 'Fedex', 'Pravesh Jain', 'Gaddam Kumar', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'Fedex', 6, 1661212800000, 1661644800000),
(38, '2022-08-23', '12344335', '46456735', 'Blue Dart', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'Blue Dart', 3, 1661212800000, 1661644800000),
(39, '2022-08-23', '12344336', '46456736', 'DHL', 'Deepti', 'Navya', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1661212800000, 1661558400000),
(40, '2022-08-24', '12344337', '46456737', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1661299200000, 1661731200000),
(41, '2022-08-24', '12344338', '46456738', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1661299200000, 1661817600000),
(42, '2022-08-24', '12344339', '46456739', 'DTDC', 'Gaddam Kumar', 'Pravesh Jain', 'Indore-452009', 'DONGLE', '1', '0.5', '0.5', 'DTDC', 2, 1661299200000, 1661644800000),
(43, '2022-08-24', '12344340', '46456740', 'UPS', 'Omega Healthcare', 'Navya', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'UPS', 1, 1661299200000, 1661731200000),
(44, '2022-08-25', '12344341', '46456741', 'Fedex', 'Pravesh Jain', 'Gaddam Kumar', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'Fedex', 1, 1661385600000, 1661731200000),
(45, '2022-08-25', '12344342', '46456742', 'Blue Dart', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'Blue Dart', 3, 1661385600000, 1661644800000),
(46, '2022-08-25', '12344343', '46456743', 'DHL', 'Deepti', 'Navya', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1661385600000, 1661904000000),
(47, '2022-08-26', '12344344', '46456744', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 1, 1661472000000, 1661904000000),
(48, '2022-08-26', '12344345', '46456745', 'DTDC', 'Gaddam Kumar', 'Pravesh Jain', 'Indore-452009', 'DONGLE', '1', '0.5', '0.5', 'DTDC', 2, 1661472000000, 1661817600000),
(49, '2022-08-27', '12344346', '46456746', 'UPS', 'Omega Healthcare', 'Navya', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'UPS', 1, 1661558400000, 1662076800000),
(50, '2022-08-27', '12344347', '46456747', 'Fedex', 'Pravesh Jain', 'Gaddam Kumar', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'Fedex', 6, 1661558400000, 1662076800000),
(51, '2022-08-27', '12344348', '46456748', 'Blue Dart', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'Blue Dart', 3, 1661558400000, 1661904000000),
(52, '2022-08-27', '12344349', '46456749', 'DHL', 'Deepti', 'Navya', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1661558400000, 1661817600000),
(53, '2022-08-27', '12344350', '46456750', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 1, 1661558400000, 1661904000000),
(54, '2022-08-27', '12344351', '46456751', 'DTDC', 'Gaddam Kumar', 'Pravesh Jain', 'Indore-452009', 'DONGLE', '1', '0.5', '0.5', 'DTDC', 2, 1661558400000, 1661817600000),
(55, '2022-09-20', '12344352', '46456752', 'UPS', 'Omega Healthcare', 'Navya', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'UPS', 1, 1663632000000, 1664064000000),
(56, '2022-09-20', '12344353', '46456753', 'Fedex', 'Pravesh Jain', 'Gaddam Kumar', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'Fedex', 6, 1663632000000, 1664064000000),
(57, '2022-09-21', '12344354', '46456754', 'Blue Dart', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'Blue Dart', 3, 1663718400000, 1664236800000),
(60, '2022-09-24', '12344357', '46456757', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1663977600000, 1664236800000),
(61, '2022-09-24', '12344358', '46456758', 'DTDC', 'Gaddam Kumar', 'Pravesh Jain', 'Indore-452009', 'DONGLE', '1', '0.5', '0.5', 'DTDC', 2, 1663977600000, 1664496000000),
(63, '2022-09-24', '12344360', '46456760', 'Fedex', 'Pravesh Jain', 'Gaddam Kumar', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'Fedex', 1, 1663977600000, 1664496000000),
(64, '2022-09-24', '12344361', '46456761', 'Blue Dart', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'Blue Dart', 3, 1663977600000, 1664496000000),
(65, '2022-09-25', '12344362', '46456762', 'DHL', 'Deepti', 'Navya', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1664064000000, 1664409600000),
(66, '2022-09-25', '12344363', '46456763', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 1, 1664064000000, 1664582400000),
(67, '2022-09-26', '12344364', '46456764', 'DTDC', 'Gaddam Kumar', 'Pravesh Jain', 'Indore-452009', 'DONGLE', '1', '0.5', '0.5', 'DTDC', 2, 1664150400000, 1664496000000),
(68, '2022-09-26', '12344365', '46456765', 'UPS', 'Omega Healthcare', 'Navya', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'UPS', 1, 1664150400000, 1664668800000),
(69, '2022-09-26', '12344366', '46456766', 'Fedex', 'Pravesh Jain', 'Gaddam Kumar', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'Fedex', 6, 1664150400000, 1664582400000),
(70, '2022-09-26', '12344367', '46456767', 'Blue Dart', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'Blue Dart', 3, 1664150400000, 1664409600000),
(71, '2022-09-26', '12344368', '46456768', 'DHL', 'Deepti', 'Navya', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1664150400000, 1664582400000),
(72, '2022-09-26', '12344369', '46456769', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 1, 1664150400000, 1664668800000),
(73, '2022-09-27', '12344370', '46456770', 'DTDC', 'Gaddam Kumar', 'Pravesh Jain', 'Indore-452009', 'DONGLE', '1', '0.5', '0.5', 'DTDC', 2, 1664236800000, 1664755200000),
(74, '2022-09-27', '12344371', '46456771', 'UPS', 'Omega Healthcare', 'Navya', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'UPS', 1, 1664236800000, 1664496000000),
(75, '2022-09-27', '12344372', '46456772', 'Fedex', 'Pravesh Jain', 'Gaddam Kumar', 'Dist:Nizamabad-503', 'DESKTOP', '1', '13', '44', 'Fedex', 6, 1664236800000, 1664755200000),
(76, '2022-09-27', '12344373', '46456773', 'Blue Dart', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'Blue Dart', 3, 1664236800000, 1664755200000),
(77, '2022-09-27', '12344374', '46456774', 'DHL', 'Deepti', 'Navya', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1664236800000, 1664668800000),
(78, '2022-09-27', '12344375', '46456775', 'DHL', 'Omega Healthcare', 'Konda Deepthi', 'Nizambabad-503002', 'LAPTOP', '1', '10', '10', 'DHL', 5, 1664236800000, 1664496000000);

-- --------------------------------------------------------

--
-- Table structure for table `versions`
--

CREATE TABLE `versions` (
  `id` int(11) NOT NULL,
  `type` varchar(15) DEFAULT NULL,
  `version` bigint(14) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `versions`
--

INSERT INTO `versions` (`id`, `type`, `version`) VALUES
(1, 'tracking_update', 1212),
(2, 'tracking_add', 1664384987);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `couriers`
--
ALTER TABLE `couriers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `get_estimate`
--
ALTER TABLE `get_estimate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login_sesions`
--
ALTER TABLE `login_sesions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status_map`
--
ALTER TABLE `status_map`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tracking`
--
ALTER TABLE `tracking`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `awb` (`awb`);

--
-- Indexes for table `versions`
--
ALTER TABLE `versions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `couriers`
--
ALTER TABLE `couriers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `get_estimate`
--
ALTER TABLE `get_estimate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `login_sesions`
--
ALTER TABLE `login_sesions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `status_map`
--
ALTER TABLE `status_map`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tracking`
--
ALTER TABLE `tracking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `versions`
--
ALTER TABLE `versions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
