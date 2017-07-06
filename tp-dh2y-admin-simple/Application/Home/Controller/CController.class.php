<?php
namespace Home\Controller;
use Think\Controller;

class CController extends Controller
{
    public function _initialize()
    {   
       //修改网站配置
        $Config = M('webinfo');
        $config = $Config -> select();
        $website = array(
            'WEBTITLE' => $config[0]['title'],
            'WEBKEYS' => $config[0]['keywords'],
            'WEBDESC' => $config[0]['description'],
            'WEBCOPY'  => $config[0]['copyright'],
            'WEBICPNO' => $config[0]['icpno']               
        );
        C($website);
        if($config[0]['isopen'] == 0){
            exit('网站维护中，请稍后访问...');
        }

        $this -> assign('config',$config);
        // $this->display();
    }
}
?>