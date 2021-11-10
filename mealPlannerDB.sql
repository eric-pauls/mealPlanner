-- Part A: Data Definition Queries

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  PRIMARY KEY (`userID`)
);


DROP TABLE IF EXISTS `recipes`;
CREATE TABLE `recipes` (
  `recipeID` int(11) NOT NULL AUTO_INCREMENT,
  `recipeName` varchar(255) NOT NULL,
  `ingredients` varchar(1000) NOT NULL, 
  `instruction` varchar(1000) NOT NULL, 
  `calorieCount` int(10),
  `userID` int(11) NOT NULL,
  PRIMARY KEY (`recipeID`),
  CONSTRAINT `usersInRecipes` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
);


DROP TABLE IF EXISTS `mealTypes`;
CREATE TABLE `mealTypes` (
  `typeID` int(11) NOT NULL AUTO_INCREMENT,
  `mealName` varchar(9) NOT NULL,
  PRIMARY KEY (`typeID`)
);


DROP TABLE IF EXISTS `mealPlans`;
CREATE TABLE `mealPlans` (
  `planID` int(11) NOT NULL AUTO_INCREMENT,
  `planName` varchar(255) NOT NULL,
  `userID` int(11) NOT NULL,
  PRIMARY KEY (`planID`),
  CONSTRAINT `usersInMealPlans` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
);


-- Part B: Sample Data 

INSERT INTO `users` VALUES (1, 'Eric'), (2, 'Tyler');

INSERT INTO `recipes` VALUES (1, 'Chicky Parm', 'Chicky, Parm', 'Cook it up', 800, 1);

INSERT INTO `mealTypes` VALUES (1, 'Breakfast'), (2, 'Lunch'), (3, 'Dinner');

INSERT INTO `mealPlans` VALUES (1, 'Healthy Choices', 1), (2, 'What is a diet?', 1), (3, 'Protein', 1);


