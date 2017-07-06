<?php
namespace Home\Widget;
use Think\Controller;

class CategoryWidget extends Controller
{
    public function getCategory()
    {
        $categoryModel = M('category');
        $map['status'] = array('eq', 1);
        $allCate = $categoryModel->where($map)->order('sort desc')->select();
        $cateTree = $this->tree($allCate);
        
        $this->assign('categoryData', $cateTree);
        $this->display('Public:Category');
    }

       /**
     * 递归生成多维数组分类树结构
     * @param  array  $data 所有分类数据信息
     * @param  integer $pid  最外层分类父ID
     * @return array        返回分类树结构数组
     */
    private function tree($data, $pid = 0)
    {
        $treeArr = array();
        foreach ($data as $key => $value) {
            if ($value['pid'] == $pid) {
                //递归调用
                $value['child'] = $this->tree($data, $value['category_id']);
                $treeArr[] = $value;
            }
        }
        return $treeArr;
    }
}