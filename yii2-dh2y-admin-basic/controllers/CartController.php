<?php
/**
 * Created by dh2y.
 * bolg: http://blog.csdn.net/sinat_22878395
 * Date: 2017/7/25 19:08
 * functional: 购物车
 */

namespace app\controllers;


use yii\web\Controller;

class CartController extends Controller
{

    public $layout = false;

    public function actionIndex(){

       return $this->render('index');
    }
}