-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: weatherapp
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `weather`
--

DROP TABLE IF EXISTS `weather`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weather` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(100) DEFAULT NULL,
  `humidity` float NOT NULL,
  `wind` float NOT NULL,
  `pressure` float NOT NULL,
  `temperature` float NOT NULL,
  `wind_direction` int(11) NOT NULL,
  `icon` varchar(10) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `last_updated` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weather`
--

LOCK TABLES `weather` WRITE;
/*!40000 ALTER TABLE `weather` DISABLE KEYS */;
INSERT INTO `weather` VALUES (1,'tokyo',63,4.12,1007,17.67,134,'02n','few clouds','2025-05-03 12:21:28'),(2,'London',56,4.42,1012,18.23,328,'03d','scattered clouds','2025-05-03 12:22:31'),(3,'Khalanga',72,2.03,1010,15.83,9,'10d','moderate rain','2025-05-03 12:33:48'),(4,'lalitpur',60,0.67,1009,20.46,323,'04d','overcast clouds','2025-05-03 12:34:14'),(5,'dhapakhel',60,1.11,1009,21.46,308,'04d','broken clouds','2025-05-03 12:34:24'),(6,'pokhara',56,1.64,1008,21.54,0,'04d','overcast clouds','2025-05-03 12:36:47'),(7,'bhaktapur',60,0.77,1009,20.16,288,'04d','broken clouds','2025-05-03 12:37:04'),(8,'sanepa',59,0.65,1009,20.62,301,'04d','broken clouds','2025-05-03 12:39:21'),(9,'chelsea',47,4.82,1012,18.4,340,'04d','broken clouds','2025-05-03 12:43:54'),(10,'liverpool',64,6.39,1015,14.75,326,'01d','clear sky','2025-05-03 12:46:45'),(11,'liverpool',64,6.39,1015,14.75,326,'01d','clear sky','2025-05-03 12:46:56'),(12,'patan',61,0.67,1010,21.73,323,'04n','overcast clouds','2025-05-03 12:59:26'),(13,'makwanpur',60,2.12,1008,22.91,24,'04n','overcast clouds','2025-05-03 13:00:27'),(14,'bajura',35,2.82,1010,27.06,203,'04d','broken clouds','2025-05-03 13:00:43'),(15,'biratnagar',36,4.11,1004,30.42,36,'01n','clear sky','2025-05-03 13:01:05'),(16,'Khalanga',74,0.94,1011,14.44,68,'04d','broken clouds','2025-05-04 01:12:44'),(17,'pokhara',72,0.95,1010,19.66,350,'04d','broken clouds','2025-05-04 01:14:04');
/*!40000 ALTER TABLE `weather` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-04  7:06:37
