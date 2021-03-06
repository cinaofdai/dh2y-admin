/*
Navicat MySQL Data Transfer

Source Server         : lnamp
Source Server Version : 50505
Source Host           : 192.168.88.88:3306
Source Database       : cms_xiaozhu158_com

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-09-13 12:47:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `dh2y_access`
-- ----------------------------
DROP TABLE IF EXISTS `dh2y_access`;
CREATE TABLE `dh2y_access` (
  `role_id` smallint(6) unsigned NOT NULL,
  `node_id` smallint(6) unsigned NOT NULL,
  `level` tinyint(1) NOT NULL,
  `module` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  KEY `groupId` (`role_id`),
  KEY `nodeId` (`node_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dh2y_access
-- ----------------------------
INSERT INTO `dh2y_access` VALUES ('3', '1', '1', null, '1');
INSERT INTO `dh2y_access` VALUES ('3', '15', '3', null, '1');
INSERT INTO `dh2y_access` VALUES ('3', '14', '3', null, '1');
INSERT INTO `dh2y_access` VALUES ('3', '13', '2', null, '1');
INSERT INTO `dh2y_access` VALUES ('3', '6', '3', null, '1');
INSERT INTO `dh2y_access` VALUES ('3', '5', '2', null, '1');

-- ----------------------------
-- Table structure for `dh2y_admin`
-- ----------------------------
DROP TABLE IF EXISTS `dh2y_admin`;
CREATE TABLE `dh2y_admin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '{1:开启,0:关闭}',
  `email` varchar(100) DEFAULT NULL,
  `create_time` int(11) NOT NULL,
  `login_time` int(11) DEFAULT NULL,
  `login_ip` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dh2y_admin
-- ----------------------------
INSERT INTO `dh2y_admin` VALUES ('1', 'admin', 'e10adc3949ba59abbe56e057f20f883e', '1', 'admin@dh2y.com', '1498011222', '1505277740', '192.168.88.1');
INSERT INTO `dh2y_admin` VALUES ('6', 'test', '123456', '0', null, '1498297138', null, null);
INSERT INTO `dh2y_admin` VALUES ('7', 'test01', 'q12345', '1', null, '1498297157', null, null);
INSERT INTO `dh2y_admin` VALUES ('5', 'dh2y', 'e10adc3949ba59abbe56e057f20f883e', '1', 'dh2y@test.com', '1498297125', '1499328279', '127.0.0.1');

-- ----------------------------
-- Table structure for `dh2y_menu`
-- ----------------------------
DROP TABLE IF EXISTS `dh2y_menu`;
CREATE TABLE `dh2y_menu` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `pid` smallint(6) NOT NULL DEFAULT '0',
  `title` varchar(20) NOT NULL COMMENT '菜单名称',
  `link` varchar(50) DEFAULT NULL COMMENT '链接',
  `icon` varchar(50) DEFAULT NULL COMMENT '字体图标',
  `sort` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='菜单表';

-- ----------------------------
-- Records of dh2y_menu
-- ----------------------------
INSERT INTO `dh2y_menu` VALUES ('1', '0', '控制台', 'Index/index', 'icon-dashboard', '0');
INSERT INTO `dh2y_menu` VALUES ('2', '0', '权限管理', '', 'icon-desktop', '1');
INSERT INTO `dh2y_menu` VALUES ('3', '2', '用户管理', 'member/index', 'icon-user', '2');
INSERT INTO `dh2y_menu` VALUES ('4', '2', '角色管理', 'rbac/role', 'icon-group', '99');
INSERT INTO `dh2y_menu` VALUES ('5', '2', '权限节点', 'rbac/index', 'icon-leaf', '33');
INSERT INTO `dh2y_menu` VALUES ('9', '8', 'URl路径推送', 'aliyun/index', '', '88');
INSERT INTO `dh2y_menu` VALUES ('6', '2', '菜单管理', 'menu/index', '', '15');
INSERT INTO `dh2y_menu` VALUES ('8', '0', '阿里推送', '', 'icon-beer', '3');

-- ----------------------------
-- Table structure for `dh2y_node`
-- ----------------------------
DROP TABLE IF EXISTS `dh2y_node`;
CREATE TABLE `dh2y_node` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `remark` varchar(255) DEFAULT NULL,
  `sort` smallint(6) unsigned DEFAULT NULL,
  `pid` smallint(6) unsigned NOT NULL,
  `level` tinyint(1) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `level` (`level`),
  KEY `pid` (`pid`),
  KEY `status` (`status`),
  KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dh2y_node
-- ----------------------------
INSERT INTO `dh2y_node` VALUES ('1', 'Admin', '后台管理', '1', '后台根节点', null, '0', '1');
INSERT INTO `dh2y_node` VALUES ('2', 'Aliyun', '阿里云推送', '1', null, '99', '1', '2');
INSERT INTO `dh2y_node` VALUES ('3', 'index', '查看', '1', null, '1', '2', '3');
INSERT INTO `dh2y_node` VALUES ('4', 'refresh', '刷新', '1', null, '1', '2', '3');
INSERT INTO `dh2y_node` VALUES ('5', 'Index', '默认控制器', '1', null, '1', '1', '2');
INSERT INTO `dh2y_node` VALUES ('6', 'index', '控制器台', '1', null, '3', '5', '3');
INSERT INTO `dh2y_node` VALUES ('13', 'Member', '用户管理', '1', null, '4', '1', '2');
INSERT INTO `dh2y_node` VALUES ('14', 'index', '用户列表', '1', null, '1', '13', '3');
INSERT INTO `dh2y_node` VALUES ('15', 'show', '查看', '1', null, '1', '13', '3');
INSERT INTO `dh2y_node` VALUES ('16', 'form', '数据操作', '1', null, '3', '13', '3');
INSERT INTO `dh2y_node` VALUES ('17', 'remove', '删除用户', '1', null, '4', '13', '3');
INSERT INTO `dh2y_node` VALUES ('18', 'status', '更改状态', '1', null, '5', '13', '3');
INSERT INTO `dh2y_node` VALUES ('19', 'Rbac', '权限管理', '1', null, '2', '1', '2');
INSERT INTO `dh2y_node` VALUES ('20', 'role', '角色列表', '1', null, '1', '19', '3');
INSERT INTO `dh2y_node` VALUES ('21', 'show', '查看角色', '1', null, '2', '19', '3');
INSERT INTO `dh2y_node` VALUES ('22', 'form', '角色数据操作', '1', null, '3', '19', '3');
INSERT INTO `dh2y_node` VALUES ('23', 'remove', '删除角色', '1', null, '5', '19', '3');
INSERT INTO `dh2y_node` VALUES ('24', 'status', '角色状态', '1', null, '6', '19', '3');
INSERT INTO `dh2y_node` VALUES ('25', 'index', '节点列表', '1', null, '7', '19', '3');
INSERT INTO `dh2y_node` VALUES ('26', 'look', '查看节点', '1', null, '7', '19', '3');
INSERT INTO `dh2y_node` VALUES ('27', 'node', '操作节点数据', '1', null, '8', '19', '3');
INSERT INTO `dh2y_node` VALUES ('28', 'deleted', '删除节点', '1', null, '9', '19', '3');
INSERT INTO `dh2y_node` VALUES ('29', 'Menu', '菜单管理', '1', null, '0', '1', '2');
INSERT INTO `dh2y_node` VALUES ('30', 'index', '菜单列表', '1', null, '0', '29', '3');
INSERT INTO `dh2y_node` VALUES ('31', 'show', '查看菜单', '1', null, '0', '29', '3');
INSERT INTO `dh2y_node` VALUES ('32', 'form', '菜单数据操作', '1', null, '0', '29', '3');
INSERT INTO `dh2y_node` VALUES ('33', 'remove', '删除菜单', '1', null, '0', '29', '3');

-- ----------------------------
-- Table structure for `dh2y_role`
-- ----------------------------
DROP TABLE IF EXISTS `dh2y_role`;
CREATE TABLE `dh2y_role` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `pid` smallint(6) DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pid` (`pid`),
  KEY `status` (`status`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dh2y_role
-- ----------------------------
INSERT INTO `dh2y_role` VALUES ('1', '超级管理员', null, '1', 'BOSS');
INSERT INTO `dh2y_role` VALUES ('3', '游客', null, '1', '看看的');

-- ----------------------------
-- Table structure for `dh2y_role_user`
-- ----------------------------
DROP TABLE IF EXISTS `dh2y_role_user`;
CREATE TABLE `dh2y_role_user` (
  `role_id` mediumint(9) unsigned DEFAULT NULL,
  `user_id` char(32) DEFAULT NULL,
  KEY `group_id` (`role_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dh2y_role_user
-- ----------------------------
INSERT INTO `dh2y_role_user` VALUES ('1', '1');
INSERT INTO `dh2y_role_user` VALUES ('3', '5');
