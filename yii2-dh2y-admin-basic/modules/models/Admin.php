<?php

namespace app\modules\models;

use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "{{%admin}}".
 *
 * @property string $id
 * @property string $username
 * @property string $adminpass
 * @property string $email
 * @property string $logintime
 * @property string $loginip
 * @property string $createtime
 */
class Admin extends ActiveRecord
{

    public $rememberMe = true;
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%admin}}';
    }

    public function rules()
    {
        return [
            ['username','required','message'=>'管理员账号不能为空','on'=>['login','seekPass']],
            ['adminpass','required','message'=>'管理员密码不能为空','on'=>['login']],
            ['rememberMe','boolean','on'=>['login']],
            ['adminpass','validatePass','on'=>['login']],
            ['email','required','message'=>'电子邮箱不能为空','on'=>['seekPass']],
            ['email','email','message'=>'电子邮箱格式错误','on'=>['seekPass']],
            ['email','validateEmail','on'=>['seekPass']],

        ];
    }

    /**
     * 验证密码
     */
    public function validatePass(){
        if(!$this->hasErrors()){
            $condition = ['username' =>$this->username,'adminpass'=>$this->adminpass];
            $data = self::find()->where($condition)->one();
            if(is_null($data)){
                $this->addError('adminpass','用户名称或密码错误');
            }
        }
    }

    /**
     * 验证电子邮箱
     */
    public function validateEmail(){
        if(!$this->hasErrors()){
            $condition = ['username' =>$this->username,'email'=>$this->email];
            $data = self::find()->where($condition)->one();
            if(is_null($data)){
                $this->addError('adminpass','管理员账号不匹配');
            }
        }
    }

    /**
     * 登录操作
     * @param $data
     * @return bool
     */
    public function login($data){

        if($this->load($data)&&$this->validate()){
            //登录操作
            $lifetime = $this->rememberMe?24*3600:0;
            $session = Yii::$app->session;
            session_set_cookie_params($lifetime); //设置保存session的cookie有效期
            $session['admin'] =[
                'username' => $this->username,
                'isLogin' => 1,
            ];
            $filed = ['logintime'=>time(),'loginip'=>ip2long(Yii::$app->request->userIP)];
            $where = ['username'=>$this->username];
            $this->updateAll($filed,$where);
            return (bool)$session['admin']['isLogin'];
        }
        return false;
    }

    /**
     * 找回密码
     * @param $data
     * @return bool
     */
    public function seekPass($data){
        $this->scenario = 'seekPass';
        if($this->load($data)&&$this->validate()){
            
        }
        return false;
    }

}
