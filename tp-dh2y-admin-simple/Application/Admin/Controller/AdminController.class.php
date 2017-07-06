<?php
namespace Admin\Controller;

class AdminController extends CommonController
{
        
        /**
         * index 显示管理员信息
         * @return [type] [description]
         */
        public function index()
        {
            $link=M('admin'); //实例化model类,参数:传表名,不写前缀
            $data=$link->select();
            $this->assign('data',$data);
            $this->display();
        }

        
        /**
         * 添加管理员
         */
        public function add()
        {
            if ($_POST['sub']) {
                $user=M('admin');
                if ($_POST['pwd'] == $_POST['repwd']) {
                    $_POST['pwd'] = md5($_POST['pwd']);
                    $_POST['password'] = $_POST['pwd'];
                    //$data=$_POST;
                    $_POST['ctime'] = time();
                    if ($user->create()) {
                        //dump($user);
                        if ($user->add()) {
                            $this->redirect("Admin/index");
                        }

                    }
                }

            }
            $this->display();
        }

        /**
         * 修改管理员状态
         * @return [type] [description]
         */
        public function update()
        {
            $update=M('admin');
            $id=$_GET['id'];
            $set=$update->find($id);
            $where="admin_id=".$id;
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
         * del 删除管理员
         */
        public function del()
        {
            $admin = M("admin");
            $id = I("id");
            if($admin -> delete($id)){  
                $this -> success("删除管理员成功！");
            }else{
                $this -> error("删除管理员失败!");
            }
        }

        /**
        * addGroup()修改管理组
        *
        */
        public function addGroup()
        {
            if ($_POST) {
                $groupAccess = M("auth_group_access");
                if ($groupAccess->create()) {
                    if ($groupAccess->add()) {
                        $this->redirect("Admin/index");
                    } else {
                        $this->error("添加管理组失败");
                        exit;
                    }
                }
            }
            $group = M("auth_group");
            $adminId = $_GET['id'];
            $groups = $group->where(array("status" => '1'))->select();
            $this->assign("adminId", $adminId);
            $this->assign("group",$groups);
            $this->display();

        }
}
?>