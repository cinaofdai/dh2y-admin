<?php
return array(
	//'配置项'=>'配置值'
    'DEFAULT_MODULE'        =>  'Admin',  // 默认模块
    /* URL设置 */
    'URL_CASE_INSENSITIVE'  =>  true,   // 默认false 表示URL区分大小写 true则表示不区分大小写
    'URL_MODEL'             =>  2,       // URL访问模式,可选参数0、1、2、3,代表以下四种模式：
    'URL_HTML_SUFFIX'       =>'',
    'URL_ROUTER_ON'         =>  true,


    //上传文件地址
    'UPLOADS_PATH' => './Uploads/',

    //扩展db配置文件
    'LOAD_EXT_CONFIG' => 'db,redis',
);