<?php
/**
 * Created by dh2y.
 * bolg: http://blog.csdn.net/sinat_22878395
 * Date: 2017/7/25 18:40
 * functional: 商品控制器
 */

namespace app\controllers;


use yii\web\Controller;

class ProductController extends Controller
{

    public $layout = false;

    /**
     * 商品列表页
     */
    public function actionIndex(){
        //$this->layout=false;
        return $this->render('index');
    }


    public function actionDetail(){
        //$this->layout=false;
        return $this->render('detail');
    }
}