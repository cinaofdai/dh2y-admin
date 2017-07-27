<?php
use yii\widgets\LinkPager;
?>
<!-- main container -->
<div class="content">

    <div class="container-fluid">
        <div id="pad-wrapper" class="users-list">
            <div class="row-fluid header">
                <h3>Users</h3>
                <div class="span10 pull-right">
                    <input type="text" class="span5 search" placeholder="Type a user's name..." />

                    <!-- custom popup filter -->
                    <!-- styles are located in css/elements.css -->
                    <!-- script that enables this dropdown is located in js/theme.js -->
                    <div class="ui-dropdown">
                        <div class="head" data-toggle="tooltip" title="Click me!">
                            Filter users
                            <i class="arrow-down"></i>
                        </div>
                        <div class="dialog">
                            <div class="pointer">
                                <div class="arrow"></div>
                                <div class="arrow_border"></div>
                            </div>
                            <div class="body">
                                <p class="title">
                                    Show users where:
                                </p>
                                <div class="form">
                                    <select>
                                        <option />Name
                                        <option />Email
                                        <option />Number of orders
                                        <option />Signed up
                                        <option />Last seen
                                    </select>
                                    <select>
                                        <option />is equal to
                                        <option />is not equal to
                                        <option />is greater than
                                        <option />starts with
                                        <option />contains
                                    </select>
                                    <input type="text" />
                                    <a class="btn-flat small">Add filter</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="new-user.html" class="btn-flat success pull-right">
                        <span>&#43;</span>
                        NEW USER
                    </a>
                </div>
            </div>

            <!-- Users table -->
            <div class="row-fluid table">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th class="span4 sortable">
                            id
                        </th>
                        <th class="span3 sortable">
                            <span class="line"></span>管理员
                        </th>
                        <th class="span2 sortable">
                            <span class="line"></span>邮箱
                        </th>
                        <th class="span3 sortable">
                            <span class="line"></span>最后登录
                        </th>
                        <th class="span3 sortable">
                            <span class="line"></span>登录IP
                        </th>
                        <th class="span3 sortable">
                            <span class="line"></span>创建时间
                        </th>
                        <th class="span3 sortable">
                            <span class="line"></span>操作
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php foreach($managers as $item): ?>
                    <!-- row -->
                    <tr>
                        <td><?=$item->id?></td>
                        <td><?=$item->username?></td>
                        <td><?=$item->email?></td>
                        <td><?=date('Y-m-d H:i:s',$item->logintime)?></td>
                        <td><?=long2ip($item->loginip)?></td>
                        <td><?=date('Y-m-d H:i:s',$item->createtime)?></td>
                        <td class="align-right">
                            <a href="#">删除</a>
                            <a href="#">修改</a>
                        </td>
                    </tr>
                    <?php endforeach;?>
                    </tbody>
                </table>
            </div>
            <div class="pagination pull-right">
                <?=LinkPager::widget([
                    'pagination'=>$pager,
                    'prevPageLabel' => '&#8249;',
                    'nextPageLabel' => '&#8250;'
                ])?>
            </div>
            <!-- end users table -->
        </div>
    </div>
</div>
<!-- end main container -->
