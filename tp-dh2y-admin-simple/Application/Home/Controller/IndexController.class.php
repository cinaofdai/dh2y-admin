<?php
namespace Home\Controller;
use Think\Controller;
use Think\Model;
use Think\Page;

class IndexController extends Controller
{
    /**
     * index
     * @return null
     */
    public function index()
    {
        $cate = M("cate");
        $data = $cate ->select() ;

        $sql="SELECT id,dream_thing,cate_id FROM me_dream";
        $Model = new Model(); // 实例化一个model对象 没有对应任何数据表
        $dream = $Model->query($sql);
        $this -> assign("cate",$data);
        $this -> assign("dream",$dream);
        //print_r($dream);exit();
        $this->display("Index/index");           
    }

    public function weather(){
        $this->redirect("http://i.tianqi.com/index.php?c=code&id=2&num=2");
    }

    /**
     * 类别
     */
    public function titleCate(){
        import('ORG.Util.Page');
        $cateid= I('cate');

        $dreamModel = M('dream');
        $count = $dreamModel->where('cate_id='.$cateid)->count();
        $page = new Page($count,3);
        $page->setConfig('header','<li class="rows">共<b>%TOTAL_PAGE%</b>页</li>');
        $page->setConfig('prev','<<');
        $page->setConfig('next','>>');
        $page->setConfig('last','末页');
        $page->setConfig('first','首页');
        $page->setConfig('theme','%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% %HEADER%');
        $cateDetail = $dreamModel->where('cate_id='.$cateid)->limit($page->firstRow.','.$page->listRows)->select();
        //print_r($cateDetail);exit();
        $cateModel = M("cate");
        $data = $cateModel ->select() ;
        $this->assign('page', $page->show());
        $this->assign("cate",$data);
        $this->assign("cateid",$cateid?$cateid:"");
        $this->assign("cateDetail",$cateDetail);
        $this->assign("cateid",$cateid);
        $this->display("Index/cate");
    }

    /**
     * 解梦详情
     */
    public function contentDetail(){
        $dreamId= I('id');
        $dreamModel = M('dream');
        $Detail = $dreamModel->where('id='.$dreamId)->find();

        $condition['cate_id'] = 'thinkphp';
        $condition['cate_id'] = 1;
        $other = $dreamModel->where('cate_id='.$Detail['cate_id'])->select();
        //print_r($other);exit();
        $this -> assign("Detail",$Detail);
        $this -> assign("other",$other);
        $this->display("Index/detail");
    }

    public function search(){
        $search = I('dr');
        $map['dream_thing'] = array('like',"%$search%");
        $dream = M('dream');
        $result = $dream->where($map)->select();
       // echo $dream->getLastSql();
       // print_r($result);exit();
        $other = $dream->where('cate_id='.$result[0]['cate_id'])->select();
        $this -> assign("other",$other);
        $this -> assign("search",$search);
        $this -> assign("result",$result);
        $this -> assign("count",count($result));
        $this->display();
    }

}