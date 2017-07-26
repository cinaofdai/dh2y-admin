<?php
/**
 * Created by dh2y.
 * bolg: http://blog.csdn.net/sinat_22878395
 * Date: 2017/7/26 11:15
 * functional: 公告控制类
 */

namespace app\modules\controllers;


use yii\web\Controller;

class PublicController extends Controller
{

    public function actionLogin(){
        $this->layout = false;
        return $this->render('login');
    }
}