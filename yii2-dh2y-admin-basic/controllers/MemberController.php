<?php
/**
 * Created by dh2y.
 * bolg: http://blog.csdn.net/sinat_22878395
 * Date: 2017/7/25 19:33
 * functional: 功能说明
 */

namespace app\controllers;


use yii\web\Controller;

class MemberController extends Controller
{
    public function actionAuth(){
        $this->layout = 'layout';
        return $this->render('auth');
    }
}