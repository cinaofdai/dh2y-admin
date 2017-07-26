--
-- 后台登录表
--
DROP TABLE IF EXISTS `dh2y_admin`;
CREATE TABLE `dh2y_admin`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键id',
    `username` VARCHAR(32) NOT NULL DEFAULT '' COMMENT '管理员',
    `adminpass` CHAR(32) NOT NULL DEFAULT '' COMMENT '管理员账号',
    `email` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '管理员邮箱',
    `logintime` INT UNSIGNED  NOT NULL DEFAULT '0' COMMENT '登录时间',
    `loginip` BIGINT NOT NULL DEFAULT '0' COMMENT '登录ip',
    `createtime` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT '创建时间',
    PRIMARY KEY(`id`),
    UNIQUE dh2y_admin_username_password(`username`,`adminpass`),
    UNIQUE dh2y_admin_username_email(`username`,`email`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO `dh2y_admin`(username, adminpass, email, createtime) VALUES ('admin',md5('123456'),'admin@qq.com',UNIX_TIMESTAMP());


