<?php
/**
 * Created by dh2y.
 * bolg: http://blog.csdn.net/sinat_22878395
 * Date: 2017/7/25 17:33
 * functional: 默认首页
 */

namespace app\controllers;


use yii\web\Controller;

class IndexController extends Controller
{
    public function actionIndex(){
        $this->layout = 'home';
        return $this->render('index');
        //return $this->renderPartial('index');
    }
}