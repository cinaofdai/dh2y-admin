/*
Navicat MySQL Data Transfer

Source Server         : MyPC
Source Server Version : 50523
Source Host           : localhost:3306
Source Database       : kuaichale

Target Server Type    : MYSQL
Target Server Version : 50523
File Encoding         : 65001

Date: 2017-07-07 10:47:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `me_admin`
-- ----------------------------
DROP TABLE IF EXISTS `me_admin`;
CREATE TABLE `me_admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(20) NOT NULL,
  `password` char(32) NOT NULL,
  `auth` tinyint(4) NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of me_admin
-- ----------------------------
INSERT INTO `me_admin` VALUES ('1', 'admin', '21232f297a57a5a743894a0e4a801fc3', '1', '1');
INSERT INTO `me_admin` VALUES ('2', 'hcx', 'e10adc3949ba59abbe56e057f20f883e', '0', '1');
INSERT INTO `me_admin` VALUES ('4', 'wangkaibo', '1441675390', '0', '1');

-- ----------------------------
-- Table structure for `me_admin_group`
-- ----------------------------
DROP TABLE IF EXISTS `me_admin_group`;
CREATE TABLE `me_admin_group` (
  `group_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(20) NOT NULL,
  `auth` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of me_admin_group
-- ----------------------------

-- ----------------------------
-- Table structure for `me_auth_group`
-- ----------------------------
DROP TABLE IF EXISTS `me_auth_group`;
CREATE TABLE `me_auth_group` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` char(100) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `rules` char(80) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of me_auth_group
-- ----------------------------
INSERT INTO `me_auth_group` VALUES ('1', '超级管理员', '1', '1,2,3,4,5,6,34,28,33,32,29,30,19,20,21,22');
INSERT INTO `me_auth_group` VALUES ('2', '管理员管理', '1', '1,7,8,9,10,11,14,15,16,17,18');
INSERT INTO `me_auth_group` VALUES ('6', '权限管理', '1', '19,20,21,22');
INSERT INTO `me_auth_group` VALUES ('10', 'guize', '1', '22,21,20,19,17,18');

-- ----------------------------
-- Table structure for `me_auth_group_access`
-- ----------------------------
DROP TABLE IF EXISTS `me_auth_group_access`;
CREATE TABLE `me_auth_group_access` (
  `uid` mediumint(8) unsigned NOT NULL,
  `group_id` mediumint(8) unsigned NOT NULL,
  UNIQUE KEY `uid_group_id` (`uid`,`group_id`),
  KEY `uid` (`uid`),
  KEY `group_id` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of me_auth_group_access
-- ----------------------------
INSERT INTO `me_auth_group_access` VALUES ('1', '1');
INSERT INTO `me_auth_group_access` VALUES ('1', '2');
INSERT INTO `me_auth_group_access` VALUES ('2', '2');
INSERT INTO `me_auth_group_access` VALUES ('2', '3');

-- ----------------------------
-- Table structure for `me_auth_rule`
-- ----------------------------
DROP TABLE IF EXISTS `me_auth_rule`;
CREATE TABLE `me_auth_rule` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(80) NOT NULL DEFAULT '',
  `title` char(20) NOT NULL DEFAULT '',
  `type` tinyint(1) NOT NULL DEFAULT '1',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `condition` char(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of me_auth_rule
-- ----------------------------
INSERT INTO `me_auth_rule` VALUES ('1', 'Index/index', '后台首页', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('2', 'Admin/index', '显示管理员信息', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('3', 'Admin/add', '添加管理员', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('4', 'Admin/update', '修改管理员状态', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('5', 'Admin/del', '删除管理员', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('6', 'Admin/addGroup', '修改管理组', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('19', ' Rule/index', '显示规则列表', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('20', ' Rule/add', '添加规则', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('21', 'Rule/mod', '修改规则', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('22', 'Rule/del', '删除规则', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('34', 'Build/index', '静态页面', '1', '1', '');
