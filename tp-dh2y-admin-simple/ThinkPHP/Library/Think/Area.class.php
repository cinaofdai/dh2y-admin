<?php
namespace Think;
	/*
	 *城市控件
	 *
	 * **/
	class Area{
		public static function city($pro = array("省","市","县/区")){
		$city = json_encode($pro);	
		$str="";
		if(!defined('CALENDAR_INIT')){
			define('CALENDAR_INIT',1);
			$str.='<select class="w5 f-mgr10 js-d-1441116928790" id="province" name="province">
                         <option></option>
                          </select>
                          <select class="w5 f-mgr10 js-d-1441116928790" id="city" name="city">
                               <option></option>
                           </select>
                          <select class="w5 f-mgr10 js-d-1441116928790" id="county" name="country">
                                  <option></option>
                            </select>
							<script type="text/javascript"  src="'.__ROOT__.'/Public/home/assets/js/area.js"></script>
							<script type="text/javascript">_init_area('.$city.');</script>';
		}
		return $str;
	}
}
?>