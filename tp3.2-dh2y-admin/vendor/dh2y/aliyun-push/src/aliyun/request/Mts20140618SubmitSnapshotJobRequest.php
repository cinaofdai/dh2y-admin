<?php
/**
 * TOP API: mts.aliyuncs.com.SubmitSnapshotJob.2014-06-18 request
 * 
 * @author auto create
 * @since 1.0, 2015.07.13
 */
class Mts20140618SubmitSnapshotJobRequest
{
	/** 
	 * 输入
	 **/
	private $input;
	
	/** 
	 * 截图配置，json对象
	 **/
	private $snapshotConfig;
	
	/** 
	 * 用户自定义配制
	 **/
	private $userData;
	
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
	
	public function setInput($input)
	{
		$this->input = $input;
		$this->apiParas["Input"] = $input;
	}

	public function getInput()
	{
		return $this->input;
	}

	public function setSnapshotConfig($snapshotConfig)
	{
		$this->snapshotConfig = $snapshotConfig;
		$this->apiParas["SnapshotConfig"] = $snapshotConfig;
	}

	public function getSnapshotConfig()
	{
		return $this->snapshotConfig;
	}

	public function setUserData($userData)
	{
		$this->userData = $userData;
		$this->apiParas["UserData"] = $userData;
	}

	public function getUserData()
	{
		return $this->userData;
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
		return "mts.aliyuncs.com.SubmitSnapshotJob.2014-06-18";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->input,"input");
		RequestCheckUtil::checkNotNull($this->snapshotConfig,"snapshotConfig");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}