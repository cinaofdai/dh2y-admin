<?php
namespace Home\Widget;
use Think\Controller;

class TopWidget extends Controller
{
    public function index()
    {
        $loginStatus = $this->getLoginStatus();
        $cartStatus = $this->isCartEmpty();

        $this->assign('cartStatus', $cartStatus);
        $this->assign('loginStatus', $loginStatus);
        $this->assign('username', cookie('username'));
        $this->display('Public:Top');
    }

    private function getLoginStatus()
    {
        if (cookie('flag') == 1) {
            return 1;
        } else {
            return 0;
        }
    }
    private function isCartEmpty()
    {
        //判断购物车是否为空
        
        $cartGoodsModel = M('cart_goods');
        if (!cookie('flag')) {
            return 0;
        } else {
            $map['user_id'] = array('eq', cookie('userId'));
            $cartGoodsNum = $cartGoodsModel->where($map)->count();
            if ($cartGoodsNum) {
                return 1;
            } else {
                return 0;
            }
        }
    }

}
