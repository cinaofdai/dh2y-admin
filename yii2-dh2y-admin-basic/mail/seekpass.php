<p>尊敬的<?=$username?>，你好</p>

<p>您找回的密码连接如下：</p>
<?php $url = Yii::$app->urlManager->createAbsoluteUrl(['admin/manage/mail-change-pass','timestamp'=>$time,'username'=>$username,'token'=>$token]) ?>
<p><a href="<?=$url?>"><?=$url?></a></p>

<p>改连接5分钟内有效，请勿传递给他人！</p>

<p>该邮件为系统自动发送，请勿回复！</p>