<?php
/**
 * TOP API: rds.aliyuncs.com.CreateBackup.2014-08-15 request
 * 
 * @author auto create
 * @since 1.0, 2015.07.13
 */
class Rds20140815CreateBackupRequest
{
	/** 
	 * 备份方法，取值：Logical，逻辑备份；Physical，物理备份默认值为Physical，逻辑备份不支持没有DB的实例，SQLServer仅支持物理备份
	 **/
	private $backupMethod;
	
	/** 
	 * 备份类型，取值：Auto，自动计算是全量还是增量；FullBackup，全量。默认值为Auto
	 **/
	private $backupType;
	
	/** 
	 * 实例名
	 **/
	private $dBInstanceId;
	
	/** 
	 * 传入此参数支持单库备份，支持传入多个DBName，以逗号分隔，最多？个对外行为设置为报错，错误码补充。BackupMethod 固定，取值为：MYSQL逻辑备份，SQLSERVER物理备份，SQL Server选Auto
	 **/
	private $dBName;
	
	/** 
	 * 系统自动生成请修改
	 **/
	private $ownerId;
	
	/** 
	 * 系统自动生成请修改
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
	
	public function setBackupMethod($backupMethod)
	{
		$this->backupMethod = $backupMethod;
		$this->apiParas["BackupMethod"] = $backupMethod;
	}

	public function getBackupMethod()
	{
		return $this->backupMethod;
	}

	public function setBackupType($backupType)
	{
		$this->backupType = $backupType;
		$this->apiParas["BackupType"] = $backupType;
	}

	public function getBackupType()
	{
		return $this->backupType;
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
		return "rds.aliyuncs.com.CreateBackup.2014-08-15";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->dBInstanceId,"dBInstanceId");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}