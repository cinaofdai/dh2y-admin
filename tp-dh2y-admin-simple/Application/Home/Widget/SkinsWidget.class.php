<?php
namespace Home\Widget;
use Think\Controller;

class  SkinsWidget extends Controller
{
    public function Links()
    {
        $link = M('Links');
        $data = $link->select();
        $this->assign('links',$data);
        $this->display('Public:Links');
    }
}