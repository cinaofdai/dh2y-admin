<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends CommonController 
{
    
    public function index()
    {   

/*        if(!empty($_SESSION['admin']['isLogin']) && $_SESSION['admin']['isLogin'] == 1){
            $this -> error('请登录');
            echo 1;
            exit;
        }
*/
       
   
     $this->display();
 }
}