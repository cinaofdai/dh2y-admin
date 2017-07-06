<?php
namespace Admin\Controller;

class GroupController extends CommonController {
   
   /**
   * index()显示管理组
   *
   **/
    public function index()
    {
        $rules = M('auth_group');
         //dump($rule);die;
        $rule = $rules ->select();
        //var_dump($rules);
        $this->assign('rule',$rule);
        $this->display();
    }

    /**
   * update()修改管理组状态
   *
   **/
     public function update()
        {
            //dump($_GET);
            $update=M('auth_group');
            $id=$_GET['id'];
            $set=$update->find($id);
            $where="id=".$id;
                if($set['status'] == '1') {
                    //dump(2);
                    $data['status'] = '0';
                    $update->where($where)->save($data);
                    $this->success('修改成功');
                } else {
                    //dump(1);
                    $data['status'] = '1';
                    $update->where($where)->save($data);
                    $this->success('修改成功');
                }



        }

    /**
   * add()添加管理组
   *
   **/
    public function add()
    {
        if ($_POST) {
            $group = M('auth_group');
            $_POST['rules'] = implode(",",$_POST['rules']);
            //dump($_POST);die;
            if ($group->create()) {
                if ($group->add()) {
                    $this->redirect("Group/index");
                } else {
                    $this->error('添加组失败');
                }
            }
        }
        $rule = M('auth_rule');
        $rules = $rule->where(array("status" => 1))->select();
        $this->assign('rules',$rules);
        $this->display();
    }

   /**
   * mod()修改管理组
   *
   **/
    public function mod()
    {    
        if ($_POST['id']) {
            //dump($_POST);die;
            $group = M('auth_group');
            $_POST['rules'] = implode(",",$_POST['rules']);
            if ($group->create()) {
                if ($group->save()) {
                    $this->redirect("Group/index");
                } else {
                    $this->error('修改组失败');
                }
            }
        }else{
           // dump($_GET['id']);die;
            $group = M('auth_group');
            $groups = $group->find($_GET['id']);
            $this->assign('group',$groups);
        }
            $rule = M('auth_rule');
            $rules = $rule->where(array("status" => 1))->select();
            $this->assign('rules',$rules);
            $this->display();
    }

   /**
   * del()删除管理组
   *
   **/
    public function del()
    {
        $group = M('auth_group');
        $id = I("id");
        if($group -> delete($id)){
            $this -> success("删除管理组成功！");
        }else{
            $this -> error("删除管理组失败!");
        }
        $this->display();
    }        
}
?>