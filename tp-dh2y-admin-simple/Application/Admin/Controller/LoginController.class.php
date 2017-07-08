<?php
namespace Admin\Controller;
use Think\Controller;

class LoginController extends Controller
{

    public function index()
    {
        $this->display();
    }
    
    public function code()
    {
        $config = array("length"=>4,         // 验证码位数  
                        "fontSize"=>20,      // 验证码字体大小 
                        "fontttf"=>'8.ttf',  //指定验证码字体  
                        'useNoise'=>true    // 关闭验证码杂点
            );
        $Verifty= new \Think\Verify($config);
        $Verifty->entry();

    }

    //检测验证码
    private function checkCode($code, $id = '')
    {    
        $verify = new \Think\Verify();   
        $code = $_POST['code'];
        return $verify->check($code, $id);
    }


    // 判断登录
   public function login()
   {  
       
       if($_POST['sub']){
            $admin = M('admin'); 
            $data = $_POST;
            $data['password'] = md5($data['password']);
            $res = $admin->where("name='{$data['name']}' and  password='{$data['password']}'" )->find();

            $codes = $this->checkCode();
            if (!$codes){
                $this->error('验证码错误！');
            } else if (!$res){
                $this->error('用户名或密码错！');
            } else{
                $_SESSION['admin'] = $res;
                $_SESSION['admin']['isLogin'] = 1;
                unset($_SESSION['admin']['password']);
                $this -> redirect("Index/index");
            }
           
        }else{
            $this -> redirect("Login/index");
        } 
    }
    //退出登录
    public function logOut()
    {    
        unset($_SESSION['admin']);
        $this -> redirect("Login/index");
    }
}
   
?>