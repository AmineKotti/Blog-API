-- --
-- -- Structure de la table Post
-- --

-- DROP TABLE IF EXISTS Post;
-- CREATE TABLE Post (
--   id int(11) NOT NULL,
--   title varchar(255) DEFAULT NULL,
--   description varchar(255) DEFAULT NULL,
--   image varchar(65535) DEFAULT NULL,
--   sharedBy User[],
--   comments Comments,
--   user User
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --
-- -- Structure de la table Comment
-- --
-- DROP TABLE IF EXISTS Comment;
-- CREATE TABLE Comment (
--   id int(11) NOT NULL,
--   text varchar(255) DEFAULT NULL,
--   date int(11) NOT NULL,
--   user User
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE DATABASE IF NOT EXISTS blogdb;
USE blogdb;
--
-- Structure de la table user
--
DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id int(11) NOT NULL,
  firstName varchar(255) DEFAULT NULL,
  lastName varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;