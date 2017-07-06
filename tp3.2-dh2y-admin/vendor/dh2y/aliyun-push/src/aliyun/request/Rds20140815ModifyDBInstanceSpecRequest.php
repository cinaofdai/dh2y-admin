<?php
/**
 * TOP API: rds.aliyuncs.com.ModifyDBInstanceSpec.2014-08-15 request
 * 
 * @author auto create
 * @since 1.0, 2015.07.13
 */
class Rds20140815ModifyDBInstanceSpecRequest
{
	/** 
	 * 目标实例级别
	 **/
	private $dBInstanceClass;
	
	/** 
	 * 待升降级的实例
	 **/
	private $dBInstanceId;
	
	/** 
	 * 自定义存储空间，取值范围：mysql为[5,1000],sqlserver为[10,1000].此参数替代型号中的最大存储空间，见实例规格附表
单位：GB
只能升级
	 **/
	private $dBInstanceStorage;
	
	/** 
	 * Postpaid，按量付费，目前只有这一种
	 **/
	private $payType;
	
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
	
	public function setdBInstanceClass($dBInstanceClass)
	{
		$this->dBInstanceClass = $dBInstanceClass;
		$this->apiParas["DBInstanceClass"] = $dBInstanceClass;
	}

	public function getdBInstanceClass()
	{
		return $this->dBInstanceClass;
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

	public function setdBInstanceStorage($dBInstanceStorage)
	{
		$this->dBInstanceStorage = $dBInstanceStorage;
		$this->apiParas["DBInstanceStorage"] = $dBInstanceStorage;
	}

	public function getdBInstanceStorage()
	{
		return $this->dBInstanceStorage;
	}

	public function setPayType($payType)
	{
		$this->payType = $payType;
		$this->apiParas["PayType"] = $payType;
	}

	public function getPayType()
	{
		return $this->payType;
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
		return "rds.aliyuncs.com.ModifyDBInstanceSpec.2014-08-15";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->dBInstanceId,"dBInstanceId");
		RequestCheckUtil::checkMaxValue($this->dBInstanceStorage,1000,"dBInstanceStorage");
		RequestCheckUtil::checkMinValue($this->dBInstanceStorage,5,"dBInstanceStorage");
		RequestCheckUtil::checkNotNull($this->payType,"payType");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}