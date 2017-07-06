<?php
/**
 * TOP API: mts.aliyuncs.com.UpdateTemplate.2014-06-18 request
 * 
 * @author auto create
 * @since 1.0, 2015.07.13
 */
class Mts20140618UpdateTemplateRequest
{
	/** 
	 * 音频转码配置
	 **/
	private $audio;
	
	/** 
	 * 容器
	 **/
	private $container;
	
	/** 
	 * 转码封包配置
	 **/
	private $muxConfig;
	
	/** 
	 * 模板名称
	 **/
	private $name;
	
	/** 
	 * 转码模板ID
	 **/
	private $templateId;
	
	/** 
	 * 转码通用配置
	 **/
	private $transConfig;
	
	/** 
	 * 视频转码配置
	 **/
	private $video;
	
	/**
	 * 仅用于渠道商发起API调用时，指定访问的资源拥有者的ID
	 **/
	private $ownerId;
	
	/**
	 *仅用于渠道商发起API调用时，指定访问的资源拥有者的账号
	 **/
    private  $ownerAccount;
    
    /**
     *API调用者试图通过API调用来访问别人拥有但已经授权给他的资源时，
     *通过使用该参数来声明此次操作涉及到的资源是谁名下的,该参数仅官网用户可用
     **/
    private $resourceOwnerAccount;
    
	private $apiParas = array();
	
	public function setAudio($audio)
	{
		$this->audio = $audio;
		$this->apiParas["Audio"] = $audio;
	}

	public function getAudio()
	{
		return $this->audio;
	}

	public function setContainer($container)
	{
		$this->container = $container;
		$this->apiParas["Container"] = $container;
	}

	public function getContainer()
	{
		return $this->container;
	}

	public function setMuxConfig($muxConfig)
	{
		$this->muxConfig = $muxConfig;
		$this->apiParas["MuxConfig"] = $muxConfig;
	}

	public function getMuxConfig()
	{
		return $this->muxConfig;
	}

	public function setName($name)
	{
		$this->name = $name;
		$this->apiParas["Name"] = $name;
	}

	public function getName()
	{
		return $this->name;
	}

	public function setTemplateId($templateId)
	{
		$this->templateId = $templateId;
		$this->apiParas["TemplateId"] = $templateId;
	}

	public function getTemplateId()
	{
		return $this->templateId;
	}

	public function setTransConfig($transConfig)
	{
		$this->transConfig = $transConfig;
		$this->apiParas["TransConfig"] = $transConfig;
	}

	public function getTransConfig()
	{
		return $this->transConfig;
	}

	public function setVideo($video)
	{
		$this->video = $video;
		$this->apiParas["Video"] = $video;
	}

	public function getVideo()
	{
		return $this->video;
	}

	
	public function setOwnerId($ownerId)
	{
		$this->ownerId = $ownerId;
		$this->apiParas["OwnerId"] = $ownerId;
	}
	
	public function getOwnerId()
	{
		return $this->ownerId;
	}
	
	public function setOwnerAccount($ownerAccount)
	{
		$this->ownerAccount = $ownerAccount;
		$this->apiParas["OwnerAccount"] = $ownerAccount;
	}
	
	public function getOwnerAccount()
	{
		return $this->ownerAccount;
	}
	
	public function setResourceOwnerAccount($resourceOwnerAccount)
	{
		$this->resourceOwnerAccount = $resourceOwnerAccount;
		$this->apiParas["ResourceOwnerAccount"] = $resourceOwnerAccount;
	}
	
	public function getResourceOwnerAccount()
	{
		return $this->resourceOwnerAccount;
	}

	public function getApiMethodName()
	{
		return "mts.aliyuncs.com.UpdateTemplate.2014-06-18";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->name,"name");
		RequestCheckUtil::checkMaxLength($this->name,128,"name");
		RequestCheckUtil::checkNotNull($this->templateId,"templateId");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}