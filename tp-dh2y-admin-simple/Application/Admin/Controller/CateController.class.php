<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/7/26
 * Time: 18:01
 */

namespace Admin\Controller;


use Think\Controller;

class CateController extends CommonController
{
        public  function index(){
            $link=M('cate'); //实例化model类,参数:传表名,不写前缀
            $data=$link->select();
            $this->assign('data',$data);
            $this->display();
        }

        public function add(){
            if ($_POST) {
                $cate = M('cate');
                if ($cate->create()) {
                    if ($cate->add()) {
                        $this->redirect("Cate/index");
                    } else {
                        $this->error('添加分类失败！');
                    }

                }
            }
            $this->display();
        }

        public function edit(){
            $cate = M('cate');
            if($_POST['sub']){
                if($cate->create()) {
                    if($cate->save()) {
                        $this->redirect("Cate/index");
                    }else{
                        $this->error("修改分类失败");
                    }
                }else{
                    $this->error("修改分类失败");
                }
            }else{
                $cate=$cate->find($_GET['id']);
                $this->assign('cate',$cate);
            }
            $this->display();
        }
}