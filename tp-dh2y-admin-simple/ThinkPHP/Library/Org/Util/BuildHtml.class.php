<?php
/**
 * Created by DaiLinLin.
 * User: Administrator
 * Date: 2017/3/8
 * Time: 10:21
 */

namespace Org\Util;


use Think\App;

class BuildHtml{

    private $config = array(
        'dir'                   =>  '',          //dir for the htmls(without/)
        'rootDir'               =>  'Html',      //root of html files(without/):html
        'name'                  =>  '',          //html文件存放路径
        'group'                 =>  '',          //指定的文件夹名称（静态页面项目分组）
        'url'                   =>  '',          //获取html文件信息的来源网页地址
        'time'                  =>  '' ,         //html文件信息填加时的时间
        'dirType'               =>  'year',      //目录存放方式:year,month,,,,
        'nameType'              =>  'name',       //html文件命名方式:name

    );

    /**
     * 构造方法，用于构造BuildHtml操作实例
     * @param array $config
     */
    public function __construct($config = array()){
        /* 获取配置 */
        $this->config   =   array_merge($this->config, $config);
    }

    /**
     * 使用 $this->name 获取配置
     * @param  string $name 配置名称
     * @return multitype    配置值
     */
    public function __get($name) {
        return $this->config[$name];
    }

    public function __set($name,$value){
        if(isset($this->config[$name])) {
            $this->config[$name] = $value;
        }
    }

    public function __isset($name){
        return isset($this->config[$name]);
    }

    /**
     * 文件是否存在
     * @access public
     * @param string $filename  文件名
     * @return boolean
     */
    public function has($filename){
        return is_file($filename);
    }

    /**
     * 创建文件夹
     * @param string $aimUrl
     * @return viod
     */
    function createDir($aimUrl='') {
        $this->dir=$aimUrl?$aimUrl:$this->dir;

        $aimUrl = str_replace('', '/', $this->dir);
        $aimDir = '';
        $arr = explode('/', $aimUrl);
        $result = true;
        foreach ($arr as $str) {
            $aimDir .= $str . '/';
            if (!file_exists($aimDir)) {
                $result = mkdir($aimDir);
            }
        }
        return $result;
    }

    /**
     * 得到相应时间的文件夹
     * @param string $group
     * @param int $time
     * @return multitype|string
     */
    function getDir($group='',$time=0){
        $this->time=$time?$time:$this->time;
        $this->group=$group?$group:$this->group;
        switch($this->dirType) {
            case 'name':
                if(empty($this->group))
                    $this->dir=$this->rootDir;
                else
                    $this->dir=$this->rootDir.'/'.$this->group;
                break;
            case 'year':
                $this->dir=$this->rootDir.'/'.$this->group.'/'.date("Y",$this->time);
                break;
            case 'month':
                $this->dir=$this->rootDir.'/'.$this->group.'/'.date("Y-m",$this->time);
                break;
            case 'day':
                $this->dir=$this->rootDir.'/'.$this->group.'/'.date("Y-m-d",$this->time);
                break;
        }

        //此文件夹路径不存在创建
        if (!is_dir($this->dir)) {
            $this->createDir();
        }
        return $this->dir;
    }

    /**
     * 获取url页面名称
     * @param string $url
     * @return mixed
     */
    function getUrlName($url=''){
        $this->url=$url?$url:$this->url;
        $filename=basename($this->url);
        $filename=explode(".",$filename);
        return $filename[0];
    }

    /**
     * 获取url页面参数组成的参数字符串
     * @param string $url    url:  params1=1&params2=2
     * @return string       结果：1_2
     */
    function getUrlQuery($url=''){
        $this->url=$url?$url:$this->url;
        $durl=parse_url($this->url);
        $durl=explode("&",$durl);
        foreach($durl as $surl)
        {
            $gurl=explode("=",$surl);
            $eurl[]=$gurl[1];
        }
        return join("_",$eurl);
    }

    /**
     * 获取静态html文件路径
     * @param string $url
     * @param int $time
     * @param string $group
     * @return string
     */
    function getName($url='',$time=0,$group=''){
        $this->url=$url?$url:$this->url;
        $this->group=$group?$group:$this->group;
        $this->time=$time?$time:$this->time;
        $this->getDir();
        switch($this->nameType)
        {
            case 'name':
                $filename=$this->getUrlName().'.html';
                $this->name=$this->dir.'/'.$filename;
                break;
            case 'time':
                $this->name=$this->dir.'/'.$this->time.'.html';
                break;
            case 'query':
                $this->name=$this->dir.'/'.$this->getUrlQuery().'.html';
                break;
            case 'namequery':
                $this->name=$this->dir.'/'.$this->getUrlName().'-'.$this->getUrlQuery().'.html';
                break;
            case 'nametime':
                $this->name=$this->dir.'/'.$this->getUrlName().'-'.$this->time.'.html';
                break;
        }
        return $this->name;
    }

    /**
     * 生成静态页面
     * @param string $url
     * @param int $time
     * @param string $group
     * @param string $htmlname
     * @return bool
     */
    function createHtml($url='',$time=0,$group='',$htmlname=''){
        $this->url=$url?$url:$this->url;
        $this->group=$group?$group:$this->group;
        $this->time=$time?$time:$this->time;
        if(empty($htmlname))
            $this->getName();
        else
            $this->name=$group.'/'.$htmlname;
        $content=file($this->url) or die("打开URL失败： ".$this->url." !");
        $content=join("",$content);
        $fp=@fopen($this->name,"w") or die("打开文件失败： ".$this->name." !");
        if(@fwrite($fp,$content)){
            fclose($fp);
            return true;
        } else{
            fclose($fp);
            return false;
        }

    }

    /**
     * 缓冲区原理生成
     * @param string $url
     * @param int $time
     * @param string $group
     * @param string $htmlname
     * @return bool
     */
    function createBFHtml($htmlname=''){
        if(ini_get('output_buffering')!==false){
            ob_start(); //开启缓存区
        }
       /*   ob_start     打开输出控制缓冲（要求php开启缓存，在php配置文件php.ini文件中可以设置 output_buffering = on）
            ob_get_contents     返回输出缓冲区内容
            ob_clean     清空（擦掉）输出缓冲区
            ob_get_clean     得到当前缓冲区的内容并删除当前输出缓冲区*/

        $url =  $this->getDir('qyz');

        //引入模板文件
        require_once(APP_PATH.'Home/View/Index/detail.html'); //动态文件    singwa.php界面同样进过缓冲区
        //echo ob_get_contents();die;

        file_put_contents($url.'/'.$htmlname.'.htm', ob_get_clean());

    }


    /**
     * 文件删除Html
     * @param string $url
     * @param int $time
     * @return bool
     */
    function deleteHtml($url='',$time=0){
        $this->url=$url?$url:$this->url;
        $this->time=$time?$time:$this->time;
        $this->getName();
        if(@unlink($this->name))
            return true;
        else
            return false;
    }

    /**
     * 删除文件夹
     * @param string $aimDir
     * @return boolean
     */
    function deleteDir($aimDir) {
        $aimDir = str_replace('', '/', $aimDir);
        $aimDir = substr($aimDir, -1) == '/' ? $aimDir : $aimDir . '/';
        if (!is_dir($aimDir)) {
            return false;
        }
        $dirHandle = opendir($aimDir);
        while (false !== ($file = readdir($dirHandle))) {
            if ($file == '.' || $file == '..') {
                continue;
            }
            if (!is_dir($aimDir . $file)) {
                $this->deleteHtml($aimDir . $file);
            } else {
                $this->deleteDir($aimDir . $file);
            }
        }
        closedir($dirHandle);
        return rmdir($aimDir);
    }


}