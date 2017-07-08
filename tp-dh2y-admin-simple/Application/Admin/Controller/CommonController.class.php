<?php
namespace Admin\Controller;
use Think\Controller;
class CommonController extends Controller
{
    public function _initialize()
    {
        if (!$_SESSION['admin']['isLogin']) {
            $this->redirect("/Login/index");
        }

        $rule = CONTROLLER_NAME.'/'.ACTION_NAME;
        $auth = new \Think\Auth();
        $adminId = $_SESSION['admin']['admin_id'];

        //得到权限菜单
        $menuList = $auth->menu($adminId);
        $auth->menuActive($menuList,$rule);
        $this->assign('menuBar',$auth->buildMenu($menuList));

        //验证权限
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