import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import request from 'universal-request'

import './index.css';

import Logo from '../../components/Homepage_component/Logo';
import Scanner from '../../components/Homepage_component/Scanner';
import Itemsgroup from '../../components/Homepage_component/Itemsgroup';

// 功能导航的图片
let iconImg = [
  [
    {uri:'https://wequpt-1259210999.cos.ap-chongqing.myqcloud.com/wecqupt/shouye/kbcx.png', text: '课表查询', path: '/kebiao'},
    {uri:'https://wequpt-1259210999.cos.ap-chongqing.myqcloud.com/wecqupt/shouye/kxjs.png', text: '空闲教室',path:''},
    {uri:'https://wequpt-1259210999.cos.ap-chongqing.myqcloud.com/wecqupt/shouye/tscx.png', text: '图书查询',path:''},
    {uri:'https://wequpt-1259210999.cos.ap-chongqing.myqcloud.com/wecqupt/shouye/xyzx.png', text: '校园资讯',path:''},
  ],
  [
    {uri:'https://wequpt-1259210999.cos.ap-chongqing.myqcloud.com/wecqupt/shouye/cjcx.png', text: '成绩查询',path:''},
    {uri:'https://wequpt-1259210999.cos.ap-chongqing.myqcloud.com/wecqupt/shouye/ksap.png', text: '考试安排',path:''},
    {uri:'https://wequpt-1259210999.cos.ap-chongqing.myqcloud.com/wecqupt/shouye/jscx.png', text: '教室申请',path:''},
    {uri:'https://wequpt-1259210999.cos.ap-chongqing.myqcloud.com/wecqupt/shouye/more.png', text: '更多功能',path:'/moreitems'},
  ]
]
// 轮播图图片的url数组
let scannnerImg = [
  'https://wequpt-1259210999.cos.ap-chongqing.myqcloud.com/wecqupt/shouye/scanner1.png',
  'https://wequpt-1259210999.cos.ap-chongqing.myqcloud.com/wecqupt/shouye/scanner1.png',
  'https://wequpt-1259210999.cos.ap-chongqing.myqcloud.com/wecqupt/shouye/scanner1.png',
]

//首页home page的DOM
export default function Home() {

  useEffect(() => {
    // 向服务端请求，判断用户是否为未登录状态
    request({
      url: 'http://localhost:7001/login/checklogin',
      method: 'GET',
      data: {
        openid: window.localStorage.getItem('openid'),
        token: window.localStorage.getItem('token')
      }
    }).then(res => {
      // 如果处于未登录状态
      if(!res.data.success){
        window.location.href = '/login'; // 跳转到登陆界面
      }
    })
  },[])

  return (
    <View className="home">
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      {/* 首页的搜索框 */}
      {/* 首页的轮播图 */}
      <Scanner uriArr={scannnerImg}></Scanner>
      {/* 首页的功能导航 */}
      <Itemsgroup icons={iconImg}></Itemsgroup>
    </View>
  );
}
