<?php
/**
 * Created by dh2y.
 * bolg: http://blog.csdn.net/sinat_22878395
 * Date: 2017/7/26 11:15
 * functional: 公告控制类
 */

namespace app\modules\controllers;

use yii;
use app\modules\models\Admin;
use yii\web\Controller;

class PublicController extends Controller
{

    public function actionLogin(){
        $this->layout = false;
        $model = new Admin();
        if(Yii::$app->request->isPost){
            $post = Yii::$app->request->post();
            if($model->login($post)){
                $this->redirect(['default/index']);
            }

        }
        return $this->render('login',[
            'model' => $model
        ]);
    }


    public function actionLogout(){
        Yii::$app->session->removeAll();
        if(!isset(Yii::$app->session['admin']['isLogin'])){
            $this->redirect(['public/login']);
            Yii::$app->end();
        }
        $this->goBack();
    }


    public function actionSeekPassword(){
        $this->layout = false;
        $model = new Admin();
        if(Yii::$app->request->isPost){
            $post = Yii::$app->request->post();
            if($model->seekPass($post)){
                Yii::$app->session->setFlash('info','电子邮件已经发送成功，请查收。');
            }
        }

        return $this->render('seek-password',[
            'model'=>$model
        ]);
    }
}