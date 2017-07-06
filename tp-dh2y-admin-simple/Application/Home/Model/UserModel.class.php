<?php
namespace Home\Model;

use Think\Model;

class UserModel extends Model
{
    protected $_validate = array(
        array('username','require','请输入用户名！'),
        array('username','4,18','用户名长度不合要求！',1,'length',1),
        array('username','','用户名已有注册！',1,'unique',1),
        // array('password','4,16','密码长度不合要求！',1,'length',3),
        array('repassword','password','确认密码填写有误！',1,'confirm',3),
        array('email','email','邮箱格式填写有误！'),
        array('verify','checkVerify','验证码不正确！',1,'callback',1),
        array('service','require','请阅读服务协议！'),
    );

    protected function checkVerify()
    {
        $Verify = new \Think\Verify();
        $code = $_POST['verify'];
        return $Verify->check($code);
    }
}