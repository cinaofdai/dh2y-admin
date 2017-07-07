<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/7/27
 * Time: 9:47
 */

namespace Admin\Controller;


use Org\Util\BuildHtml;
use Think\Page;

class BuildController extends CommonController
{
    /**
     * 生成静态页面
     */
    public function index(){
        if ($_POST) {
            $url = $_POST['url'];
            $build = new BuildHtml();
            $build->group='gcld';
            $build->dirType = 'day';
            $build->time = date('Y-m-d',time());
            $build->nameType = 'nametime';
            if($url!=''){
                $build->createHtml($url);
                $this->success('页面生成成功！');
            }else{
                $build->createBFHtml('detail');
                $this->success('buffer,页面生成成功！');
            }
        }else{
            $this->display();
        }
    }




}