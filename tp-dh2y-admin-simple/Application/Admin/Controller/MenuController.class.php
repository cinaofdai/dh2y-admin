<?php
/**
 * Created by dh2y.
 * bolg: http://blog.csdn.net/sinat_22878395
 * Date: 2017/7/8 13:17
 * functional: 功能说明
 */

namespace Admin\Controller;


use Org\Util\Data;

class MenuController extends CommonController
{
    /**
     * 菜单列表
     */
    public function index(){
        $data = M('menu')->select();
        $menu = Data::tree($data,'title', $fieldPri = 'id');
        $this->assign('menu',$menu);
        $this->display();
    }

    /**
     * 删除菜单
     */
    public function del(){
        $rule = M("menu");
        $id = I("id");
        if($rule -> delete($id)){
            $this -> success("删除菜单成功！");
        }else{
            $this -> error("删除菜单失败!");
        }
    }

    /**
     * 添加菜单
     */
    public function add(){
        if ($_POST) {
            $rule = M('menu');
            $_POST['link'] = trim($_POST['link']);
            if ($rule->create()) {
                if ($rule->add()) {
                    $this->redirect("menu/index");
                } else {
                    $this->error('添加菜单失败！');
                }

            }
        }
        $data = M('menu')->select();
        $this->assign('menu',Data::tree($data,'title', $fieldPri = 'id'));
        $this->display();
    }

    /**
     * 更改菜单
     */
    public function mod(){
        $model = M('menu');
        if($_POST['sub']) {
            $_POST['link'] = trim($_POST['link']);
            if($model->create()) {
                if($model->save()) {
                    $this->redirect("menu/index");
                }else{
                    $this->error("修改菜单失败");
                }
            }else{
                $this->error("修改菜单失败");
            }

        }else{
            $data=$model->find($_GET['id']);
            $this->assign('menu',$data);

            $menu = $model->select();
            $this->assign('list',Data::tree($menu,'title', $fieldPri = 'id'));
        }
        $this->display();
    }

}