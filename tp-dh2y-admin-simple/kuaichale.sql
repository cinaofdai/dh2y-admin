/*
Navicat MySQL Data Transfer

Source Server         : MyPC
Source Server Version : 50523
Source Host           : localhost:3306
Source Database       : kuaichale

Target Server Type    : MYSQL
Target Server Version : 50523
File Encoding         : 65001

Date: 2016-07-27 18:03:34
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
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of me_auth_group
-- ----------------------------
INSERT INTO `me_auth_group` VALUES ('10', 'guize', '1', '22,21,20,19,17,18');
INSERT INTO `me_auth_group` VALUES ('1', '超级管理员', '1', '1,2,3,4,5,6,28,19,20,21,22');
INSERT INTO `me_auth_group` VALUES ('2', '管理员管理', '1', '1,7,8,9,10,11,14,15,16,17,18');
INSERT INTO `me_auth_group` VALUES ('6', '权限管理', '1', '19,20,21,22');

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

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
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of me_auth_rule
-- ----------------------------
INSERT INTO `me_auth_rule` VALUES ('1', 'Index/index', '后台首页', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('2', 'Admin/index', '显示管理员信息', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('3', 'Admin/add', '添加管理员', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('4', 'Admin/update', '修改管理员状态', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('5', 'Admin/del', '删除管理员', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('6', 'Admin/addGroup', '修改管理组', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('28', 'Cate/index', '解梦分类管理', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('33', 'Dream/add', '添加解梦', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('32', 'Dream/index', '解梦管理列表', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('29', 'Cate/add', '添加解梦分类', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('30', 'Cate/edit', '修改解梦分类', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('19', ' Rule/index', '显示规则列表', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('20', ' Rule/add', '添加规则', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('21', 'Rule/mod', '修改规则', '1', '1', '');
INSERT INTO `me_auth_rule` VALUES ('22', 'Rule/del', '删除规则', '1', '1', '');

-- ----------------------------
-- Table structure for `me_cate`
-- ----------------------------
DROP TABLE IF EXISTS `me_cate`;
CREATE TABLE `me_cate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cate_name` char(10) NOT NULL COMMENT '分类名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='分类表';

-- ----------------------------
-- Records of me_cate
-- ----------------------------
INSERT INTO `me_cate` VALUES ('1', '人物');
INSERT INTO `me_cate` VALUES ('2', '动物');
INSERT INTO `me_cate` VALUES ('3', '植物');
INSERT INTO `me_cate` VALUES ('4', '物品');
INSERT INTO `me_cate` VALUES ('5', '活动');
INSERT INTO `me_cate` VALUES ('6', '生活');
INSERT INTO `me_cate` VALUES ('7', '自然');
INSERT INTO `me_cate` VALUES ('8', '鬼神');
INSERT INTO `me_cate` VALUES ('9', '建筑');
INSERT INTO `me_cate` VALUES ('10', '其他');

-- ----------------------------
-- Table structure for `me_dream`
-- ----------------------------
DROP TABLE IF EXISTS `me_dream`;
CREATE TABLE `me_dream` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dream_thing` varchar(20) NOT NULL COMMENT '梦见的东西',
  `explain` text NOT NULL COMMENT '解梦',
  `cate_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COMMENT='解梦表\r\n';

-- ----------------------------
-- Records of me_dream
-- ----------------------------
INSERT INTO `me_dream` VALUES ('1', '驴骡 驴子 骡子 ', '梦见骑驴骡主得财吉。\r\n梦见驴，将会逐渐摆脱困境。\r\n梦见自己骑在驴身上，不久会离开人世。\r\n梦见驴挨打，不久的将来自己的社会地位会受到影响。做梦人会被迫调离工作。\r\n梦见有人一丝不挂的骑在驴上，而且骑驴的人的手和头被砍掉，骑驴人会命归天。\r\n梦见负重的驴，会名声大噪，发大财。\r\n梦见驴尥蹶子，作梦人的亲友会企图损害他的名声。\r\n梦见驴群从城门口跑出，该城的居民会免受疾病危害。但是梦见驴朝城门口冲来，该城的居民会遭到灾祸。\r\n梦见驴的尸体，是吉兆，\r\n梦见河里或湖里漂着驴的尸体，做梦人将去海上旅行。\r\n梦中听到驴叫，做梦者要谨言慎行。\r\n梦见驴穿着衣服和鞋子，会受到朋友的捉弄，陷入困境。\r\n梦见驴在房顶平台上，做梦人会家破人亡。\r\n梦见杀驴骡马有酒食。', '2');
INSERT INTO `me_dream` VALUES ('2', '奶牛 母牛 ', '梦见奶牛在牧场闲转或吃草，是安宁和富裕的吉兆。\r\n梦见养了很多奶牛或赶奶牛，会发大财。\r\n梦见别人赶着许多奶牛，要破财。\r\n梦见奶牛追赶自己，会因为女人而名声扫地。\r\n女人梦见被牛追赶，会与别人偷，对丈夫冷淡。\r\n梦见挤牛奶，喜事会接踵而来，但是女人梦见挤牛奶，是不祥之兆。\r\n梦见膘肥体壮的肥奶牛，生活富裕。\r\n梦见瘦骨嶙峋的奶牛，大难将临。\r\n梦见白奶牛比黑奶牛吉祥。\r\n梦见产奶量高的牛,要走红运，发大财。\r\n梦见奶牛在前，牛犊在后,妻子即将临产。\r\n梦见奶牛打架,肩上责任重大，工作繁忙，但是能赚大钱。\r\n梦见奶牛被牛追赶，意味着对要做的事迟迟下不了决心，但是最后做出的决定是明智的，会有收获。\r\n梦见让狗把奶牛赶进了自己的院子，预示在朋友的帮助下能发大财。\r\n\r\n母牛代表充实的恋爱。公牛母牛均代表你将会有爱来临，不要错失机会。', '2');
INSERT INTO `me_dream` VALUES ('3', '水牛', '梦见水牛主先祖索食。\r\n梦见水牛来家主丧事。\r\n梦见公水牛，是吉兆。\r\n但是梦见骑水牛，意味着死亡。', '2');
INSERT INTO `me_dream` VALUES ('4', '猎犬 猎狗', '梦见被凶恶的猎犬追赶，预示能识破仇人的每个阴谋诡计。\r\n梦见手脚被紧紧的捆住，并有猎犬在抓咬自己的肉，会被判死刑。\r\n梦见一个很仇的人带着许多猎犬闯入自己的家杀人，会身染恶疾。\r\n梦见许多丑陋的人带着猎犬闯自己的家杀人，会身染恶疾。\r\n梦见正在捕猎的猎犬，预示你将经历非常愉快的改变，这让人十分高兴。\r\n女人梦见猎犬，她将爱上一个地位比她低微的男人。\r\n梦见猎犬尾随她，表示虽然有很多追求者，但她真正喜欢的一个都没有。\r\n梦见购买猎犬，要防偷防盗。\r\n原版周公解梦：\r\n梦跨犬登天，主多得子，淫欲须节制。《梦林玄解》', '2');
INSERT INTO `me_dream` VALUES ('5', '野猪', '如果你对雄野猪的印象是凶猛，可能它代表你内心的某部分在争取承认。\r\n如果你把生殖与它相联，那么是直接的性象征。另一方面，生殖有更隐喻的意义：即，给被压抑的部分生命。\r\n如果它给你的印象是兽性。那么兽性可能指原始的或不为社会接受的压抑部分。\r\n如果它与罪恶相联或是它对你有性暗示，它的代表你自己压抑的与性有关的情感。\r\n野猪代表攻击性。人的攻击性有时朝向自己。所以你应该找到你的攻击性的源头。如男性可能与俄狄浦斯情结有关。', '2');
INSERT INTO `me_dream` VALUES ('6', '小猪', '小猪吃母奶，健康方面将有一番波折。如：高高兴兴与朋友去参加迪斯科舞会，却因逞强把腰报伤……这种情形可能会发生，所以，凡事都要适可而止。\r\n梦见抱着猪崽，暗示证券、不动产投资将会给你带来意外的财运，钱财像滚雪球一样会越滚越大。这是发横财的好梦，是上天赐予你的良机，可要好好把握祝\r\n梦见妻子抱着小猪，暗示妻子将会怀上财福双全的胎儿。随着孩子的成长，家业会更加兴隆，孩子会成长为企业家，且有可能带来意外的财运。\r\n梦见母猪带一群小猪，意味着梦者的财富将会增加，或者家里将会增加人口。', '2');
INSERT INTO `me_dream` VALUES ('7', '公牛', '公牛代表你的男子气，也可能代表对恋爱的激，公牛母牛均代表你将会有爱来临，不要错失机会。。如果你是个女人呢？公牛也可能还是代表你的男子气，代表你身上的阳刚的一面。心理学发现，任何男人心理上都或多或少有一点女性的成分，反之，任何女人心理上也都或多或少有一些男于气的成分。一个风风火火，敢作敢为的女性，这种男子气成分可能更多一些。在里，这种成分就可以表现为公牛。\r\n当然，一个女人梦见公牛，也可以代表她生活中遇到的某一位男性，代表她对他的潜在的感。\r\n公牛代表力量，一位男性梦见自己是一头公牛，意味着他对自己的力量很自信。如果你梦见斗牛，则可能象征着你在克服或抑制自己的生物本能。它也可以是种性象征。男性可以会有自己的类似动物的性经验。相对他们的高尚的追求而言，这种动物性是可怕的。\r\n同样的，女性在意识或潜意识里视男性的性行为为粗暴、凶残的，并且男性特征的其他方面也适用这种看法，如竞争性等。\r\n如果女性梦见自己被头公牛追赶，这可能意味着害怕与男人的性关系。公牛也可代表者的父亲，如果是这种况需要解决她的恋父结。在任何况下，这类女性者都需要坚持她的女性特点，而不是压抑它：她应该自信，女性特点完全有力量驯服男性的色欲并把它转成温柔的性渴慕。\r\n一头驯服的公牛表示动物性，尤其是性的和谐整合，或是你被掩盖的全部潜意识的被整合。\r\n作祭祀的牛表示精神战胜动物性（或是已完成或仅是一种愿望）。若仅仅是一头被杀死的公牛代表绪或本能的压抑，或是你的男性气质的压抑。\r\n它还可以代表生殖。如果你允许自己的潜意识进入意识，那么它完全有力量给你带来新生。\r\n一年轻人梦见一头公年正在村子里大路上横冲直撞，跳进了水池，一下子变成了一天鹅，平静而优雅地在水面游动着。\r\n这个的意义据我估计，是指一个粗鲁莽撞的他，在遇上一个女孩后，变成了优雅稳重的他。\r\n上面所说的公牛都是那种野性的公牛，如果你梦见一头老老实实的普通牛，那么它代表的只是勤劳，有时，梦见牛代表你现在工作得太疲劳了。', '2');
INSERT INTO `me_dream` VALUES ('8', '肚子 肚皮', '肚子里装的，是自己喜欢的饮食，它代表了愿望的实现和欲望的满足。\r\n梦见自己肚胀，是发财的吉兆，就是得到了自己喜欢的东西，超出了日常需要的限度。\r\n已婚妇女梦见肚子发胀，不久要生孩子。\r\n未婚女子梦见肚子发胀，意味着要嫁到豪门富家。\r\n寡妇梦见肚子发胀，大难将会临头。\r\n梦见接受腹部开刀，桃花运将有进展。将大受异性青睬，追求你的人络绎不绝。在这种情况之下，你当垂手可得如意郎君……\r\n梦见腹痛如绞在床上翻滚，财运上升。有可能有一笔意外收入。但今后一年，容易在餐厅：超级市场等地忘记找回零钱，所以要小心。\r\n梦见自己被人用刀挡开肚皮，你会心想事成，事事如意。你会收到好消息。                                ', '1');
INSERT INTO `me_dream` VALUES ('9', '手', '人要靠双手来做事，所以手代表事业。\r\n梦见双手被砍掉，除了失去朋友之外，能得到神的帮助。\r\n手又长又结实，意味着事业会成功。\r\n手变红，意味着红运当头，也就是官运亨通。\r\n手无力发黄，则意味着无力掌控自己的事业，这通常是因为疾病的困扰。\r\n梦见与陌生人握手，意味着在事业上能够交到靠得住的朋友。\r\n梦见双手握钱，则预示着可以聚集万贯家财。\r\n女人梦见自己的手变得坚硬，预示她的很硬。\r\n梦见洗手，在金钱方面将不断受苦。虽然收入少，但支出却比收入要多，所以经常囊中羞涩。\r\n梦见自己的手脚被绑表示你最近会罹患疾病，应特别注意。                                ', '1');
INSERT INTO `me_dream` VALUES ('10', '脚', '脚是人的根基。当脚在梦中出现，通常表示人的根基将要发生变化。\r\n梦见自己的脚被砍，能当官。\r\n商人梦见自己长了许多只脚，会捞钱。\r\n梦见洗脚，预示着贪婪。\r\n梦见踢别人的脚，会受他人辱。\r\n梦见脚烫伤，会因一时糊涂，遭受重大损失。\r\n梦见脚肿大，会左支右绌，负债累累。\r\n梦见脚受伤，表示工作或会发生疾玻\r\n梦见双脚残废,要小心提防别人诬告你，会有丑闻发生在你身上，但并没有危险之事。\r\n梦见脚脏了，表示对性厌恶或是会有不正常的性关係。\r\n梦见自己的手脚被绑表示你最近会罹患疾病，应特别注意。                                ', '1');
INSERT INTO `me_dream` VALUES ('11', '头', '头是忧愁\r\n人身体的各部分中，头是离烦恼最近的地方，所以头通常表示着忧愁。\r\n梦见自己头大了，是提升的先兆。也可能是忧愁增加，但这并不像头发那样，预示着外加的忧愁，而是意味着自己的本分。也就是说，自己份内的烦心事会更多，这通常就被看成是提升的前兆。\r\n梦见在镜子中看到自己的头，同样也是意味着提升，但这是因为有勇气面对自己的问题，对份内的职责有足够的勇气去承担，所以才会得到上级的赏识。\r\n梦见有人挥动着剑企图砍自己的头，是提醒自己和家人要谨言慎行，小心翼翼，意味着自己的忧愁会引起别人的不满。自己和家人都应该注意，要谨言慎行，小心驶得万年船。\r\n梦见吃被砍掉头的动物肉，要发财。\r\n而如果双手抱头，则是把忧愁抓在手中，一切尽在掌握，所以通常被解释为捷报频传。\r\n梦见用镜子照自己的头，是祥瑞，要被擢升。\r\n梦见双手抱头，捷报频传。\r\n头上长疽不久,头意味着生，头上长疽是指生的根基开始腐败变质，就像一棵树的根已经烂掉，再茂盛的枝干也支撑不了多久。败坏的生失去了存在的资格，当然就只能走向灭亡。                                ', '1');
INSERT INTO `me_dream` VALUES ('12', '脸', '在中国人的传统观念里，脸和面子直接相关。梦里的脸，因而也多与形象、能力、人际关系和运气有关。\r\n梦里看见自己的脸，一方面有可能表示你在反省自我，思索和追寻一个真实的自我，或是警告自己，抛弃虚假的面具。另一方面，也有可能在提醒你将会发生不愉快的事；对已经结婚的人来说，预示有可能会离婚。\r\n梦见自己用镜子看自己的脸，也有两方面的含义。一方面，可能表示你心中对自己形象不满，对自己的容貌没有信心，希望能改善自己的形象；另一方面，可能表示近期你正考虑如何在别人面前表现自己。\r\n梦见把自己的脸遮盖起来，暗示了做梦人想掩藏自我，拒绝表达自己的真实想法，或想遮掩自己的能力。\r\n梦见自己对别人的脸特别关注，暗示你在生活中正努力尝试了解、关注别人。梦见几张不同的脸，可能提醒你应该关注生命中那些真正重要的人。\r\n梦见漂亮明快、神情开朗的脸，预示你心情愉快，生活幸福开心。\r\n梦见有人满面笑容，预示你可能会结识新的朋友。\r\n如果梦中的脸，不但漂亮，还让你感觉诚挚，或很放心，暗示你工作顺利，或将得到令你满意的工作，并从中得到乐趣。\r\n梦见丑陋的脸，或是五官歪斜，挤眉弄眼的脸，暗示你可能会遇到麻烦，陷入恶劣的困境，内心烦恼。年轻人做这样的梦，还有可能表示感情方面会遭到打击，出现波折。如果这张脸让你感觉很邪恶，近期还要格外小心上当受骗，如与别人有生意往来，或签订合约，要格外小心。\r\n如果梦见陌生的、面目狰狞或怪异可怕的脸，还提醒你周围可能会出现心怀叵测的敌人。\r\n如果是梦见家人或朋友突然有张可怕的脸，则暗示那个人将遭遇不幸，或不正当的钱财收入。\r\n梦见扭曲的脸，也表示将遭遇灾祸。\r\n如果梦见自己的脸变扭曲了，暗示了你内心正在矛盾挣扎，或者感到十分自卑。\r\n梦见朋友或爱人的脸变得扭曲，可能表示你潜意识中感到，他们心中正有十分矛盾的心理。\r\n如果梦见自己的脸变丑了，并且梦里感到悲哀，暗示你在爱情方面将遭遇挫折，可能始终得不到心上人的回应，内心痛苦。\r\n梦见自己的脸变得异常漂亮俊美，并在梦里感到高兴，表示近期与人交往方面十分顺利，深受大家喜爱、信任，并还可能发挥领导能力，带领大家解决问题。\r\n梦见自己的脸肿了，或是变胖了，或比原来红，都预示你会发财，或得到提升，跻身富贵。\r\n梦见自己脸上多了很多皱纹，预示可能将经历一段拮据的日子，经济压力加大，生活质量下降。\r\n梦见脸变得憔悴，缺乏生气，预示你近期工作繁忙，朋友增多，虽然有些操劳奔波，但并不需要担心。\r\n梦见脸上长痘或生疮，不用太过担心，表示你需要加强运动；原本就喜欢运动的人做这样的梦，则表示近期在运动中可能会有好运气，也许会碰上喜欢的人，或收到意外的惊喜。\r\n梦见自己恋人的脸变得衰老，预示你们之间可能正在渐渐疏远，关系将会破裂。\r\n梦见脸很脏，满面污垢，预示你会有灾祸不幸，近期要提高警惕。\r\n梦见挡着脸，预示可能会有感情纠葛，或是和人有奸情、丑闻，害怕被人发现。\r\n原版周公解梦：\r\n仇人脸黄，争讼败。《周公解梦》\r\n丑脸现，主厄运至。《周公解梦》 脸白者，囚人出狱。《周公解梦》 脸红肿者，主贵吉。《周公解梦》 脸黄白，主破财，凶。《周公解梦》 脸黄者，老人升天。《周公解梦》 脸歪曲者，主大凶。《周公解梦》 美面现，主幸福临。《周公解梦》\r\n梦半面丑美，吉。半得半失，虚浮见喜之象。左为父兄长老，左亲友邻;\r\n右为弟侄幼辈，右邻仇家。《梦林玄解》\r\n梦构面色青黑黄瘦，凶，病恙惊忧，不祥之兆。《梦林玄解》\r\n梦见面者，必有居住事。《敦煌本梦书》\r\n梦见妻面变常，大凶，为夫妻反目之象，又为鳏寡别离之兆。若义夫梦 此，为破财之兆。《梦林玄解》\r\n梦见人面变。我有喜，人行礼。我有灾，人情哀。若是冤家债，须离觌面 来。《梦林玄解》\r\n梦见人面丑如鬼，凶。梦中人是谁，其人必不祥;同伴与交游，必有非心\r\n在，或彼有天殃。《梦林玄解》\r\n梦脸带胡须，凶，奸邪盗贼之占。《梦林玄解》\r\n梦脸上画花纹，凶。君子梦此大凶，小人梦此反吉。如梦半边花脸，一事或得或失。《梦林玄解》\r\n梦麻面忽光，颜色不变。此梦乃蒙羞被辱之象。若梦光彩异常，为大吉兆。病人梦此大凶。《梦林玄解》\r\n梦面，大吉。诸事和调，众心顺适，益寿延年。久别者梦此，必得会面;求见者梦此，必得识面。《梦林玄解》\r\n梦面变如鬼形，吉。梦中见鬼形，昼夜相反，非变之真，是吉非患。《梦林玄解》\r\n梦面赤，吉。红紫黄皆喜色，梦此必有喜庆。梦如醉如怒，红似赤而嫩，为怒为丧，紫而无光，三者皆凶。《梦林玄解》\r\n梦面戴假面具。主得人覆庇之兆，为诈昧羞惭之象。《断梦秘书》\r\n梦面骨露出无皮肉如骷髅，大吉。贵者梦此，主易位封国君;富者梦此，主以财得官爵;贫贱者梦此，主得横财;女子梦此，应在夫婿;人君梦此，应在士民。皆主吉祥喜庆。《梦林玄解》\r\n梦面红。红而有喜色者，主有喜庆;红而如醉如怒者，主有愤怒丧亡之事。《断梦秘书》\r\n梦面忽长，吉。相知久长，延龄未央;梦长梦短，眼见更移;无荣无辱，无变无疑。《梦林玄解》\r\n梦面色枯槁，凶。梦此者业消入，病殒命，诸事苦，百忧集。《梦林玄解》\r\n梦面上麻子，主不光之兆。《断梦秘书》\r\n梦面上生毛。遇事躲避为宜。《梦林玄解》\r\n梦面上有金钱，凶。为生疮，为失物，为被人欺辱。若梦疮疥者反此。 《梦林玄解》\r\n梦面生黑疵，凶。梦疵在何处，以相法祥之，有凶无吉，但轻重大小不 同。《梦林玄解》\r\n梦面生鳞甲，凶，将遇难。《梦林玄解》\r\n梦面生三口，大吉，贵升一品之象。天三生木，地八成之。本一口而梦三 口，百事大吉，大喜。《梦林玄解》\r\n梦面涂柜，凶，将有难有祸至。《梦林玄解》\r\n梦面涂墨，大凶。梦见自己，主自己身危;梦见他人，主他人心恶。《梦林玄解》\r\n梦面妆粉。男子梦此，主愧耻不举，女人梦此，主荣华都丽。《梦林玄解》\r\n梦面紫无光，主大凶。《断梦秘书》\r\n梦取土培面，主显贵异常。《断梦秘书》\r\n梦人面生麻。不光之兆。《梦林玄解》\r\n梦洗面有蓬垢不净，凶。有祸难逃，有祸难隐，有仇难避。有病医必当问卜。《梦林玄解》\r\n梦洗去面垢，吉，逢凶化吉。《梦林玄解》\r\n梦掩面，凶。梦此必有幽昧之事至，害怕见人。《梦林玄解》\r\n梦用纸糊于脸上。诈诡隐避，对敌不宜梦此，须防奸细。病人见梦，大为不祥。《梦林玄解》\r\n面生疮黑，主子凶。《周公解梦》\r\n妻脸慢怒，交恶友。《周公解梦》\r\n生人脸白，主失财。《周公解梦》\r\n食面者，有重丧至。《周公解梦》\r\n子脸黄，主失禄位。《周公解梦》\r\n梦面额忽异平日，大吉。神旺色润，心宽貌舒，有德非诵，有威可畏。梦 中忽异于平时，觉然神归于本穴，学长才高。贵者爵禄增高，威名远扬; 富者财益丁多;贫贱者改旧从新;少年者为他年预兆。《梦林玄解》                                ', '1');
INSERT INTO `me_dream` VALUES ('13', '子宫', '梦见子宫，健康状况欠佳。\r\n女人梦见子宫里则近期运程：万事逐渐转为顺利，但不可操之过急，一定要按步就班。                                ', '1');
INSERT INTO `me_dream` VALUES ('14', '手指', '手指是生活\r\n手主事业，手指依托于手掌，就代表由事业支撑起来的个人生活。\r\n梦见砍自己的手指，会成为场上的胜者。\r\n梦见手指被蒸气烫伤，会嫉妒别人。\r\n梦见多指的手，有贵客登门。\r\n梦见自己的手指变长了，生意兴旺。\r\n梦见短手指，生活拮据。\r\n梦见歪曲的手指，会利用贪污公款的手段来搂钱。\r\n梦见手指流血，钱会被骗走。\r\n梦见多指的手，有贵客登门。\r\n梦见手指折者主子玻                                ', '1');
INSERT INTO `me_dream` VALUES ('15', '秃头', '梦中看到秃头的男子，表示有人正窥视着你的权益。如果你能提高警惕，他的阴谋将无法得逞。\r\n男性梦到秃头的女人，表示他有一个爱钱而心眼坏的妻子。\r\n女性若梦到秃头的男性，这是警告她，与其再找个男人结婚，不如靠自己的才能去赚钱维持生活。\r\n梦到秃头的婴儿，表示你有一个快乐的家庭，伴侣尚佳，子女也很乖。                                ', '1');
INSERT INTO `me_dream` VALUES ('16', '眼睛 目', '梦见眼睛，素有「灵魂之窗」之称，在的世界也代表打开心扉的窗口，暗示你的精神健康状态。\r\n梦见眼睛发红，预示身体有玻\r\n梦见女人的眼睛闪闪发光，一切会付之东流。\r\n眼睛会发光，这是个非常好的，表示你购买的股票会上涨，受到人人的祝福。\r\n梦见自己的眼睛肿而不疼，生活会幸福，没有痛苦。\r\n梦见涂着黑眼影或眼油烟的女人，经济要受损失。\r\n梦见别人朝自己使眼色，意味着要得重病，甚至是不治之症。\r\n梦见盲眼，小心家人会有病痛。\r\n眼睛失明表示生病，与儿子分离，亦表示会遭受诈欺，或被卷入与法律有关的事件。\r\n梦见自己瞎了，意味你对自己有一部分不了解或不自知。\r\n眼睛糜烂表示要提防因眼前利益而吃亏。\r\n洗眼睛的表示有任何烦恼的事，都能解决。\r\n眼晴有灰尘进入的表示会遗失东西或是遭小偷。\r\n\r\n双目失明亲友难信，在境的语言里，双目失明并不是真的看不梦见任何东西，它意味着你心灵的眼睛失去了辨别能力，你所喜欢和亲近的人，并不值得你信任。                                ', '1');
INSERT INTO `me_dream` VALUES ('17', '裸体 脱光衣服', '裸体主损失\r\n裸体失去了衣服，是不祥之兆，意味着损失。梦见自己裸体，会有贫穷和痛苦。\r\n梦见自己赤裸裸的上街，则要遭受重大损失。\r\n梦见自己的妻子或女友裸体，则意味着双方失去了感情，相互关系会变得冷淡。\r\n梦见女人（除了自己的妻子）赤身裸体，是富有丰福的征兆，你会获得意外之财，宜小心运用。\r\n梦见赤裸的男人，会感到忧愁和悲伤。\r\n病人梦见自己赤露全身，病会恶化。\r\n梦见和裸体者交谈，意味着身体接近损失，自己的健康会越来越差。\r\n梦见有人剥光了自己的衣服，经济会出现危机。\r\n梦见裸体画，精神稳定。\r\n梦见这个在现实生活中不可能出现的房间，房里还出现一个裸女，代表你很满意目前的性生活，同时还想要再得到更不一样的性爱体验。                                ', '1');
INSERT INTO `me_dream` VALUES ('18', '桃子 水蜜桃', '   桃子细腻柔软，是财富的象征。\r\n桃者兆吉，古人以为桃有避邪驱鬼的功效。\r\n梦见桃子，能发大财。梦见吃桃，身体健壮。\r\n梦见买桃，收入大增。\r\n梦见别人给自己桃子，会得到遗产。\r\n梦见给朋友桃子，友会增加。\r\n未婚男子梦见给恋人桃子，会得到对方的爱。\r\n失业者梦见给别人桃子，能找到好工作。\r\n梦见从树上摘桃子，不久就会得到好运。\r\n梦见腐烂的桃子，则意味着失败。                             ', '3');
INSERT INTO `me_dream` VALUES ('19', '板栗 栗子', '梦见大吃栗子，双亲有变故。\r\n梦见摘栗子，父母会健康长寿。\r\n梦见吃栗子，身体健康。                                ', '3');
INSERT INTO `me_dream` VALUES ('20', '核桃', '梦见核桃肉，预示吉祥如意。\r\n梦见虫蛀过的核桃仁，提醒你小心被欺骗。\r\n梦见自己砸核桃，预示你目前的努力，将会取得成功。\r\n梦见吃核桃仁，预示病情将会好转，或身体健康。\r\n梦见采摘核桃，预示可能会有灾祸降临。\r\n梦见送别人核桃，预示你可能会赢得新的声誉。\r\n梦见接受核桃，预示你可能会失去朋友。\r\n原版周公解梦：\r\n采集核桃，主灾难。《周公解梦》\r\n梦核桃。此梦主有远方或阔别经年者来谒，或欲借居，但志向异，终难契合。《断梦秘书》\r\n人送核桃，失朋友。《周公解梦》                                ', '3');
INSERT INTO `me_dream` VALUES ('21', '杏', ' 梦见有人吃杏，是交好运或获得好处的吉兆。\r\n梦见看到杏，预兆会遇到困难。\r\n梦见杏黄欲坠者兆生疮疴。                               ', '3');
INSERT INTO `me_dream` VALUES ('22', '乘坐装满宝石的船', '梦见乘坐在装满宝石的船上，如果你是女士，将会喜得贵子，否则一般都与财富有关，近期你将会财运亨通，发大财。                                ', '4');
INSERT INTO `me_dream` VALUES ('23', '公共汽车', '梦见公共汽车，通常表示你正为实现自己的目标而努力。有时也是现实生活中工作或生活压力的一种反映。\r\n如果梦见汽车异常破旧，则表示你对眼前的事情有潜在的担心。\r\n如果梦见车里非常拥挤，让你非常不舒服，则表示在发展过程中，或是眼前事情的进行中，有很多事让你感到非常烦恼。\r\n梦见自己在等公共汽车，预示你需要等待事业或生活的转机。\r\n梦见自己乘公共汽车，预示你正处在事业发展的道路上。\r\n梦见自己在开公共汽车，预示你会实现自己的目标，并会在这个过程中影响别人的命运。\r\n梦见自己乘坐公共汽车穿过街道，预示和朋友之间的误会，你会做出愚蠢的承诺。\r\n梦见自己在公共汽车上，但遇到事故停了车，或是抛了锚，则暗示你可能会遇到经济困难，不得不过一段困窘低迷的日子。                                ', '4');
INSERT INTO `me_dream` VALUES ('24', '工作', '梦见做艰苦的工作，事业会成功。\r\n孕妇梦见干重活，分娩时要忍受巨大的痛苦。\r\n犯人梦见做苦活，不久会出狱。\r\n梦见干轻活，是不祥之兆，每天所挣仅够糊口。\r\n梦见别人做劳力，会被对手攻击。\r\n梦见妻子干重活儿，家里要增加人口。\r\n男人梦见自己调动了工作，会提职增薪。\r\n梦见别人调动工作，会受到损失。\r\n犯人梦见自己转到别的监狱，不久会释放出狱。\r\n梦见申请调换工作，是不祥之兆，会遇到忧愁和灾难。\r\n女人梦见丈夫调动了工作，夫妻生活和谐、幸福。\r\n梦见努力给别人调动工作，会与朋友产生隔阂。                                ', '5');
INSERT INTO `me_dream` VALUES ('25', '读书 看书', '读书主成就\r\n古人云，书中自有颜如玉，书中自有黄金屋。读书在梦中，就代表了成就。\r\n男人梦见读书，爱情能得到成功，能获得爱情。\r\n梦见妻子读书，不久会有好消息传来。\r\n女人梦见读书，会得到丈夫更多的疼爱。\r\n学生梦见读书，将能在考试中获得优异的成绩。\r\n少女梦见看书，很快要嫁给一位有知识、有教养的男人。\r\n已婚男子梦见看书，会喜得贵子，这个孩子日后成为一个远近闻名的学者。\r\n已婚女子梦见看书，会生一个有德有才的千金。\r\n商人梦见看书，会摆脱困境。\r\n梦见敌人读书是凶兆，敌人会声威大震。\r\n梦见妻子读书，不久会有好消息。\r\n梦见读欢迎词，会名声大噪。\r\n梦见对听众宣读自己的发言稿，一切努力都会落空。\r\n梦见读写在地上的字，是不祥之兆,会有人搞阴谋反对自己。\r\n梦见读石头上刻写的文章，会智力超人，远近闻名。\r\n书有积极意义——明智或有价值的知识。\r\n也有消极意义——仅仅是观点。仅仅是理论、表面知识。\r\n你在梦中的感情将决定其恰当的意义。\r\n梦见读好书，会名扬天下。\r\n梦见读坏书，会名誉扫地。\r\n读书文写字大吉。意思是梦见有人读书写字是大吉兆。\r\n见读书者主聪明。\r\n观人读书生贵子。意思是梦见看别人读书，会喜得贵子。                                ', '5');
INSERT INTO `me_dream` VALUES ('26', '借东西', '梦见自己去向别人借东西，预示你将要节省开支。\r\n梦见别人向你借东西，预示你困难时，能得到别人的帮助。\r\n梦见你借给人家日用品，表示你很能慷慨惯了，以致于弄得个人经济拮据。\r\n梦见有人借东西，被你拒绝了，表示你开始维护自己的权益，并使别人对你保持一份敬意。\r\n梦见有人把东西借给你，表示你有亲近的朋友并有光明的未来。                                ', '6');
INSERT INTO `me_dream` VALUES ('27', '送饭', '梦见送饭，表示讨好。\r\n梦见给老婆或老公送饭，表示夫妻生活比较和谐。\r\n梦见给领导送饭，表示讨好领导。                                ', '6');
INSERT INTO `me_dream` VALUES ('28', '头部顶着一座山', '梦见头部顶着一座山，则主得财。                                ', '7');
INSERT INTO `me_dream` VALUES ('29', '壕沟 水沟', '梦见壕沟，会遇到危险。\r\n梦见掉进壕沟或水沟里，生意会亏损。                                ', '7');
INSERT INTO `me_dream` VALUES ('30', '水库', '男人梦见大水库，会富有。\r\n女人梦见大水库，夫妻生活幸福，白头偕老。\r\n未婚女子梦见大水库，会嫁给一位十分富有的男子。\r\n未婚男子梦见大水库，会娶一位品行端正、称心如意的女子为妻。\r\n商人梦见大水库，捷报会频传。\r\n男人梦见在水库里潜水，会身强力壮。\r\n女人梦见在水库里潜水，意味着要怀孕。\r\n热恋中的男子梦见和恋人一块在水库里潜水，两人都会很幸福。\r\n商人梦见在水库里洗澡，不久的将来，会做一宗大买卖。\r\n梦见修水库，会名声大噪。\r\n梦见往水库里放水，是不祥之兆，会饔飧不继。\r\n梦见排入水库里的水，会成为大机构的负责人。\r\n梦见干涸的水库，会生玻\r\n梦见水库里盛满牛奶，儿女会成行。                                ', '0');
INSERT INTO `me_dream` VALUES ('31', '佛', '  梦见佛，是成功和获利的祥兆，象征着人间的功名富贵。\r\n梦见高大的佛，带来宁静、慈悲的感觉，预示生活吉祥平安，也象征对内心宁静，或是某种精神世界的追求。\r\n原版周公解梦：\r\n拜佛欲动，有大财。《周公解梦》\r\n佛与人言，有福助。《周公解梦》\r\n梦拜佛欲动。此梦文人主大贵，常人主得财。《断梦秘书》\r\n梦拜佛欲动。文人主大贵，常人主大财。《梦林玄解》\r\n梦佛在云端呼召，应之者出行有际遇，大吉。《梦林玄解》\r\n梦见佛法。梦此者，主得佛力普渡。《断梦秘书》\r\n梦见礼佛，得贵人力。《敦煌本梦书》\r\n梦看佛。主亲有寿，妻有子，事事能逢凶化吉。《断梦秘书》\r\n梦看佛者，主亲有寿，妻有子，事事逢凶化吉。《梦林玄解》\r\n梦随诸佛行，主为善男善女。《梦林玄解》\r\n梦堂上有佛。女人吉，利平常人。《梦林玄解》\r\n梦堂上有佛。女人梦之吉，常人梦之亦利，文人梦之大贵。惟在客梦之不祥。《断梦秘书》\r\n梦问佛，佛无言不答，主疾病至，灾祸临。《梦林玄解》\r\n梦问佛不答，主疾至灾临，急宜解镇。《断梦秘书》\r\n梦诸佛降落。主有喜庆，主遇善人，获善事。《梦林玄解》\r\n梦诸佛下降，主有喜庆，遇善人，获善事。《断梦秘书》\r\n梦诸佛与僧人密语。慎防闺门有私，主人无权，急宜解禳。《断梦秘书》                              ', '8');
INSERT INTO `me_dream` VALUES ('32', '神仙', '梦见神，是成功和获利的祥兆。\r\n梦见神的手里握着一把剑，敌人会被消灭。\r\n梦见神的手里握着三股叉，怒不可遏，居住区要大祸降临。\r\n已婚妇女梦见神笑容满面，会生一个在青年时代就扬名天下的儿子。\r\n梦见神把自己抱在怀里，会生活幸福，寿比南山。\r\n原版周公解梦：\r\n独自拜神，助力少。《周公解梦》\r\n梦拜神，主得财利，吉。《断梦秘书》\r\n梦城隍神。善人梦之，主有佳应;常人梦之，主隐告谴罚。亟宜虔祀恳祷，更自改悔，方可无灾。《断梦秘书》\r\n梦电母。梦之主得贤内助。《断梦秘书》\r\n梦风伯。主舟行有惊，凡事须斟酌行之。士子梦之，主为佳兆。《断梦秘书》\r\n梦风母。主来日风起，亦主阴人暗损，小人窥伺，恐有讼事无端而兴，宜谨防之。《梦林玄解》\r\n梦见财神，主经商茂盛。《断梦秘书》\r\n梦见福神，主寿命延长。《断梦秘书》\r\n梦见吉神，获福;见凶神，有殃。如梦见正直之神，诸人利;梦见忠勇之 神，武士得力;梦见文学之神，主才人益智;梦见福禄之神，寿命长;梦见财帛之神，经商茂;梦见冥司之神，主不祥。论是何神、见何形以推之。梦见鬼物，文人吉，平人凶。梦见家亡之鬼，主有阴灾病至。《梦林玄解》\r\n梦见解神者，不成事。《敦煌本梦书》\r\n梦见神，得财。《敦煌本梦书》\r\n梦见神厕，大富贵。《敦煌本梦书》\r\n梦见土地。主人口不宁，家宅不安，须急禳之，可免。主有迁移或动土之 事。《断梦秘书》\r\n梦见正神，主诸事吉利。《断梦秘书》\r\n梦江河水神。出行及商人梦之，须防舟行有厄。必祈求祭赛，始吉。余者梦之，恐有水灾，或主有暴雨至。《断梦秘书》\r\n梦金甲神捧己上天，主大吉。《梦林玄解》\r\n梦金龙四大王。士子梦之，兆主发迹;行人梦之，须防风波之险。《断梦秘书》\r\n梦腊猎迎神赛会。此梦主神出游，巡察人间祸福。若其人因梦所见而改过从善，行正义，天必佑之。《梦林玄解》\r\n梦雷神。梦之者，宜急自修省，毋罹天谴，仕宦尤须留意。《断梦秘书》\r\n梦神乘马人云。是安其心于危难之际也。《断梦秘书》\r\n梦神乘马升天又堕下。此为见险而动、动而能免大险之象。《断梦秘书》\r\n梦神乘马直上天空，主大贵之兆。《断梦秘书》\r\n梦神赐衫衣帛绢等物，主百事嘉美。《梦林玄解》\r\n梦神授养生之道。高迈欲作长明灯颂，一朝染目疾，朦胧而不自审从何得，梦神人对高迈说：子于长明灯，其有负科。高迈应声而寤，寤而起，起而作颂，明日目愈。《梦林玄解》\r\n梦神召及神告以吉凶事，主福禄寿喜。《梦林玄解》\r\n梦神召语。梦神告以吉凶之事，主有福禄喜事。《断梦秘书》\r\n梦祀一切诸神，主交易得利。《梦林玄解》\r\n梦祀诸神，主交易得财。《断梦秘书》\r\n梦泰山神。凡人梦之，须戒僭逾之举，抑妄冀之谋，否则神必击之。《断梦秘书》\r\n梦为神。亲属推此，凡梦已亡故者，非作祟为殃，则冥府超升矣。梦君为神，国家无主，地府有灵。详为某神，可推休咎。梦臣为神，主忠良辅佐，弃职还山。详属何神，或主其人辞世。梦父母为神，病者仙游。梦夫为神，病者为凶;或夫主职守阳地，或夫主神镇阴事也。梦妻妾为神，主孕育不吉。梦兄弟为神，姓名登籍，文士联飞。梦师友为神，表又所形，见诸梦想，其人正直者，主作此神。《梦林玄解》\r\n梦五路财神。此为执掌财帛之神，梦之主时连通达，转困为亨，乃大吉之兆也。能虔祀之，无不如志。《断梦秘书》\r\n梦迎神赛社，主有外财之获。《梦林玄解》\r\n梦雨师。有滋生润泽之象，吉兆也。《断梦秘书》\r\n梦遇神指点。穷人梦之，主得名利。《断梦秘书》\r\n梦灶神。梦之主有火灾，或患眼痛，必禳解庶可无害。《断梦秘书》\r\n梦招财童子。学子主才思英发，行商主得利远方，或进得力人口。《断梦秘书》\r\n梦子孙娘娘。主子孙昌大，福泽久长。《断梦秘书》\r\n入神庙神动，大吉。《周公解梦》\r\n他人拜神，大吉祥。《周公解梦》\r\n迎神赛社，有外财。《周公解梦》\r\n有神不拜，家人死。《周公解梦》\r\n与妇人拜神，誉灭。《周公解梦》\r\n与男人拜神，女人凶。《周公解梦》\r\n与众人拜神，显贵。《周公解梦》\r\n梦祷献神。国之大礼，莫大于祷祠祭祀，虔诚叩拜，上格神明，盛设牲帛;下通泉府，受斋戒于庚甲，陈礼仪于旦暮。梦此吉兆，验在荣华，列祈仰之忱，享天人之佑。梦行郊社之礼，建功勋如反掌。梦作王祀之仪，树恒产业以荣身，病假此以痊愈，祸因兹而消散。梦宰牲而不成献祀者，主忧患将作。梦焚香、击钟、设乐，皆大吉。《梦林玄解》\r\n见女神仙，主事成。《周公解梦》\r\n女神仙责骂，主凶。《周公解梦》\r\n神仙不语，主有吉。《周公解梦》\r\n与神仙谈，主不吉。《周公解梦》\r\n梦登天上月台，见群仙，主大吉。《梦林玄解》\r\n梦请仙。梦自设坛请仙者，主文思进益，才慧倍人。梦见人请仙者，主事有先几。商贾梦此，财利成虚;讼狱梦此，主有人扶佑。《梦林玄解》\r\n梦随仙众行，主得飞升之术。老人、病者则主离形去世。《梦林玄解》\r\n梦仙圣来家。主事毕吉利。男妇福德，老幼倍康泰，文人吉星高照，道人飞升，讼者有解，病人不祥。《梦林玄解》\r\n梦遇仙。主有喜庆之事，功名贵显，财利丰亨。修道之人梦之，主丹功成熟。《断梦秘书》\r\n梦遇仙者，主有喜庆之事。功名显贵，财利丰亨。修道之人，功成丹熟 矣。《梦林玄解》                                ', '0');
INSERT INTO `me_dream` VALUES ('33', '在天桥(陆桥)上行走', '  梦见在天桥(陆桥)上行走，遭遇交通事故的可能性甚大。尤其是在没有斑马线的地方穿越车道而被车撞等等，要特别小心。                              ', '9');
INSERT INTO `me_dream` VALUES ('34', '城堡 城堡尖塔', '正值结婚年龄的青年梦见城堡，会打一辈子光棍。\r\n梦见城堡尖塔、神殿前的石柱也是同样意思。                                ', '9');
INSERT INTO `me_dream` VALUES ('35', '井水', ' 梦见井水，表示工作顺利;如果做梦人还是正在求学的学生，表示成绩优异，学业在成。\r\n如果梦见从井中汲水，表示将获得幸福，或想去获得潜意识里的某些灵感。\r\n商人梦见从井中取水，预示生意顺利，将拥有巨大的财富。\r\n如果梦里出现的井水污浊肮脏，暗示可能会有人诋毁你的声誉。\r\n如果梦见一口井死水沉沉，表示生活有些缺少活力，不妨想办法给自己寻找些新鲜活力。\r\n如果梦中水井的水位很高，表示生活富裕;如果水位特别低，则预示可能要度过一段困难的日子。\r\n如果梦见把一样东西扔进了井里，然后听到下面黑暗深处传来水花溅起的声音，表示你很想试着去探索自己潜意识中潜伏的冲动。\r\n井水同时也是人的才华与内在才智的象征。如果梦里发现井水干涸，或无法从井里汲水上来，可能你在潜意识中有些担心创造力枯竭，或为不能发挥出你的内在才华而研究压抑。\r\n梦见自己的影子映在井里，暗示工作或学习成绩可能要下降，近期尤其要集中精力工作学习。\r\n梦见向井中丢石头，预示会遇到心仪的对象，但同时也提醒你尽量避免到海、河、湖边等地约会，以免遭遇意外。\r\n原版周公解梦：\r\n梦汲井泉而饮之。此梦有二占;家居梦此，水清洁者得财帛，水污浊者事难成;异乡梦此，自汲取者归乡，人汲授者音信至。《梦林玄解》\r\n梦井水浑浊，凶。此梦主乏粮之患。若梦汲无水，绳索断落，瓶器破伤者，尤为大凶。《梦林玄解》\r\n梦井水流溢，大凶，主遇族灭之祸。《梦林玄解》\r\n取井水清，主有吉。《周公解梦》                               ', '9');
INSERT INTO `me_dream` VALUES ('36', '橘色', '橘色的梦，是友善待人的象征，你希望别人能体贴对待你，也愿意把自己的温柔传递给家人、朋友、爱人。                                ', '10');
INSERT INTO `me_dream` VALUES ('37', '靛青', '在梦中看见靛青，表示你将欺骗善良的人，骗取他们的财产。\r\n梦见靛蓝色的水，表示你将卷人一场险恶的情事之中。                                ', '10');
INSERT INTO `me_dream` VALUES ('38', '辣味', '梦中感觉到辣味，表示你性格急躁，火爆。\r\n这个梦同时提醒你处事要学会冷静，要克制自己的火爆脾气和急性子。\r\n梦见食物火辣辣的，让你难受，表示生活中，可能有朋友或其它人对你的热情态度和过度关心，让你感到难以适应。\r\n梦见葱、蒜等的辛辣，暗示你在与人交往中有潜在的拒绝心理，渴望独处，有点逃避社交。                                ', '10');