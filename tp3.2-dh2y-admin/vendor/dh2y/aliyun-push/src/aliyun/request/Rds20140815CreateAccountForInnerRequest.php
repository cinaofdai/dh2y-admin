<?php
/**
 * TOP API: rds.aliyuncs.com.CreateAccountForInner.2014-08-15 request
 * 
 * @author auto create
 * @since 1.0, 2015.07.13
 */
class Rds20140815CreateAccountForInnerRequest
{
	/** 
	 * 备注
	 **/
	private $accountDescription;
	
	/** 
	 * 账号
	 **/
	private $accountName;
	
	/** 
	 * 密码
	 **/
	private $accountPassword;
	
	/** 
	 * 权限
	 **/
	private $accountPrivilege;
	
	/** 
	 * 实例名称
	 **/
	private $dBInstanceId;
	
	/** 
	 * DB名称
	 **/
	private $dBName;
	
	/** 
	 * 系统自动生成请修改
	 **/
	private $ownerId;
	
	/** 
	 * 资源ID
	 **/
	private $resourceOwnerAccount;
	
	/** 
	 * 系统自动生成请修改
	 **/
	private $resourceOwnerId;
	
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
	
	public function setAccountDescription($accountDescription)
	{
		$this->accountDescription = $accountDescription;
		$this->apiParas["AccountDescription"] = $accountDescription;
	}

	public function getAccountDescription()
	{
		return $this->accountDescription;
	}

	public function setAccountName($accountName)
	{
		$this->accountName = $accountName;
		$this->apiParas["AccountName"] = $accountName;
	}

	public function getAccountName()
	{
		return $this->accountName;
	}

	public function setAccountPassword($accountPassword)
	{
		$this->accountPassword = $accountPassword;
		$this->apiParas["AccountPassword"] = $accountPassword;
	}

	public function getAccountPassword()
	{
		return $this->accountPassword;
	}

	public function setAccountPrivilege($accountPrivilege)
	{
		$this->accountPrivilege = $accountPrivilege;
		$this->apiParas["AccountPrivilege"] = $accountPrivilege;
	}

	public function getAccountPrivilege()
	{
		return $this->accountPrivilege;
	}

	public function setdBInstanceId($dBInstanceId)
	{
		$this->dBInstanceId = $dBInstanceId;
		$this->apiParas["DBInstanceId"] = $dBInstanceId;
	}

	public function getdBInstanceId()
	{
		return $this->dBInstanceId;
	}

	public function setdBName($dBName)
	{
		$this->dBName = $dBName;
		$this->apiParas["DBName"] = $dBName;
	}

	public function getdBName()
	{
		return $this->dBName;
	}

	public function setOwnerId($ownerId)
	{
		$this->ownerId = $ownerId;
		$this->apiParas["ownerId"] = $ownerId;
	}

	public function getOwnerId()
	{
		return $this->ownerId;
	}

	public function setResourceOwnerAccount($resourceOwnerAccount)
	{
		$this->resourceOwnerAccount = $resourceOwnerAccount;
		$this->apiParas["resourceOwnerAccount"] = $resourceOwnerAccount;
	}

	public function getResourceOwnerAccount()
	{
		return $this->resourceOwnerAccount;
	}

	public function setResourceOwnerId($resourceOwnerId)
	{
		$this->resourceOwnerId = $resourceOwnerId;
		$this->apiParas["resourceOwnerId"] = $resourceOwnerId;
	}

	public function getResourceOwnerId()
	{
		return $this->resourceOwnerId;
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
		return "rds.aliyuncs.com.CreateAccountForInner.2014-08-15";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}