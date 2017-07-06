<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/7/27
 * Time: 9:47
 */

namespace Admin\Controller;


use Think\Page;

class DreamController extends CommonController
{
    /**
     * 解梦列表
     */
    public function index(){
        $dream=M('dream');
        $cate=M('cate');
        $count = $dream->count();
        $page = new Page($count,10);
        $data = $dream->field('d.id,d.dream_thing,d.explain,d.cate_id,c.cate_name')->table($dream->getTableName().' d') ->join($cate->getTableName().' c on c.id=d.cate_id')->limit($page->firstRow.','.$page->listRows) ->select();
        //print_r($data);exit();
        //echo $dream->getLastSql();exit();
        $this->assign('page', $page->show());
        $this->assign('data',$data);
        $this->display();
    }

    /**
     * 添加解梦
     */
    public function add(){
        if ($_POST) {
            $dream = M('dream');
            if ($dream->create()) {
                if ($dream->add()) {
                    $this->redirect("Dream/index");
                } else {
                    $this->error('添加解梦失败！');
                }

            }
        }
        $ca=M('cate');
        $cate = $ca->select();
        $this->assign('cate',$cate);
        $this->display();
    }

    public function edit(){
        $dream = M('dream');
        if($_POST['sub']){
            if($dream->create()) {
                if($dream->save()) {
                    $this->redirect("Dream/index");
                }else{
                    $this->error("修改分类失败");
                }
            }else{
                $this->error("修改分类失败");
            }
        }else{
            $dream=$dream->find($_GET['id']);
            $this->assign('dream',$dream);
        }
        $ca=M('cate');
        $cate = $ca->select();
        $this->assign('cate',$cate);
        $this->display();
    }
}