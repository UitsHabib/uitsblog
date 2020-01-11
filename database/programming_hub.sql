-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2020 at 08:09 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `programming_hub`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cat_id` int(11) NOT NULL,
  `category_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `category_name`) VALUES
(1, 'Dynamic Programming'),
(2, 'Graph Theory');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `by_user` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `likes` int(11) DEFAULT '0',
  `data_time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `likes` int(11) DEFAULT '0',
  `post_by` varchar(255) NOT NULL,
  `post_date` date NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_id`, `title`, `description`, `likes`, `post_by`, `post_date`, `category_id`) VALUES
(3, 'Number of index', '??????<i><b><u> ????</u></b></i>', 0, 'uits_habib', '0000-00-00', 2),
(4, 'Habib', 'amder desh er naam bangladesh', 0, 'uits_habib', '0000-00-00', 1),
(5, 'Sieve', '<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b><u><font size=\"4\" face=\"arial\">Number Theory<br></font></u></b><font size=\"4\" face=\"arial\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sieve is an algorithm of Number Theory</font></p>', 0, 'uits_habib', '0000-00-00', 1),
(6, 'undefined', 'undefined', 0, 'uits_habib', '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `programmer`
--

CREATE TABLE `programmer` (
  `Id` int(11) NOT NULL,
  `UserName` char(255) NOT NULL,
  `Email` char(255) NOT NULL,
  `Password` char(255) NOT NULL,
  `IsActive` tinyint(1) NOT NULL DEFAULT '0',
  `Code` text,
  `Role` int(11) NOT NULL DEFAULT '0',
  `uva` int(11) NOT NULL DEFAULT '0',
  `uri` int(11) NOT NULL DEFAULT '0',
  `codeforces` int(11) NOT NULL DEFAULT '0',
  `vjudge` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `programmer`
--

INSERT INTO `programmer` (`Id`, `UserName`, `Email`, `Password`, `IsActive`, `Code`, `Role`, `uva`, `uri`, `codeforces`, `vjudge`) VALUES
(39, 'uits_habib', 'habiburrahman3089@gmail.com', '1234', 1, '4499', 3, 0, 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `programmer`
--
ALTER TABLE `programmer`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `programmer`
--
ALTER TABLE `programmer`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
