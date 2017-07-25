<?php
/**
 * Created by dh2y.
 * bolg: http://blog.csdn.net/sinat_22878395
 * Date: 2017/7/25 19:15
 * functional: 订单
 */

namespace app\controllers;


use yii\web\Controller;

class OrderController extends Controller
{
    public $layout = false;

    /**
     * 订单中心
     */
    public function actionIndex(){
        return $this->render('index');
    }

    /**
     * 收银台
     */
    public function actionCheck(){
        return $this->render('check');
    }


}