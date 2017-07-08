<?php
namespace Admin\Controller;

class RuleController extends CommonController 
{  
    /**
    *index()显示规则列表
    **/
    public function index()
    {
        $rule = M('auth_rule');
        // dump($rule);
        $rules = $rule ->select();
        //var_dump($rules);
        $this->assign('rules',$rules);
        $this->display();
    }

    
    /**
    * add() 增加规则
    **/
    public function add()
    {
        if ($_POST) {
            $rule = M('auth_rule');
            $_POST['name'] = trim($_POST['name']);
            if ($rule->create()) {
                if ($rule->add()) {
                    $this->redirect("Rule/index");
                } else {
                    $this->error('添加规则失败！');
                }

            }
        }
        $this->display();   
    }


    public function mod()
    {
        $rule = M('auth_rule');
        if($_POST['sub'])
            {
                $_POST['name'] = trim($_POST['name']);
                if($rule->create())
                {
                    if($rule->save())
                    {
                        $this->redirect("Rule/index");
                    }else{
                        $this->error("修改规则失败");
                    }
                }else{
                    $this->error("修改规则失败");
                }
                
            }else{
                //dump($_GET);
                $rule=$rule->find($_GET['id']);
                $this->assign('rule',$rule);
            }
            //$this->assign('id',I('id'));
            $this->display();
        }


    public function del()
    {
        $rule = M("auth_rule");
        $id = I("id");
    
        if($rule -> delete($id)){
            
            $this -> success("删除规则成功！");
        }else{
            $this -> error("删除规则失败!");
        }
    }

}