<?php
namespace Admin\Controller;
use Think\Controller;
class CommonController extends Controller
{
    public function _initialize()
    {   
        if ($_SESSION['isLogin']) {
            $this->redirect("你没有登陆",U("Login/login"));
        }

        if ($_SESSION['admin']['admin_id'] == '1') {

             return true;
        }      

        if ($_SESSION['admin']['isLogin'] != '1') {
            // $this->error("请先登录",U("/Login/"));
        }

        $rule = CONTROLLER_NAME.'/'.ACTION_NAME;
        $auth = new \Think\Auth();
        $adminId = $_SESSION['admin']['admin_id'];
        if (!$auth->check($rule,$adminId)) {
            if(isset($_SESSION['admin']['admin_id'])){
                $this->error("你没有权限");
            }else{
                $this->error("请先登录",U("Login/index"));
            }
        }
    }
}
?>