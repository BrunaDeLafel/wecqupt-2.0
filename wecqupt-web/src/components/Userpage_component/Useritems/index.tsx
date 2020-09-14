import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import { cdnurl } from '../../../public/utils.js'
const { cdnimg } = cdnurl;

import './index.css';

export default function Useritems(){
    return (
        <View className="userItems">
            <View className="useritemsItem" style={{paddingRight:"1rpx", paddingLeft:"4rpx"}}>
                <Image source={{height: 45,width: 43,uri: `${cdnimg}/wecqupt/userinfo/wdft.png`}} style={{position:"relative",top:"-11rpx"}} />
                <Text style={{color:"#3B3B3B", fontSize:"25rpx", fontWeight:"bold", position:"relative", right: "200rpx", top:"-5rpx"}}>我的发帖</Text>
                <Image source={{height: 25,width: 18,uri: `${cdnimg}/wecqupt/userinfo/arrow.png`}} />
            </View>
            <View className="useritemsItem">
                <Image source={{height: 45,width: 43,uri: `${cdnimg}/wecqupt/userinfo/wdsc.png`}} style={{position:"relative",top:"-9rpx"}}/>
                <Text style={{color:"#3B3B3B", fontSize:"25rpx", fontWeight:"bold", position:"relative", right: "200rpx", top:"-5rpx"}}>我的收藏</Text>
                <Image source={{height: 25,width: 18,uri: `${cdnimg}/wecqupt/userinfo/arrow.png`}} />
            </View>
            <View className="useritemsItem" style={{marginBottom:"20rpx"}}>
                <Image source={{height: 45,width: 43,uri: `${cdnimg}/wecqupt/userinfo/llls.png`}} style={{position:"relative",top:"-9rpx"}}/>
                <Text style={{color:"#3B3B3B", fontSize:"25rpx", fontWeight:"bold", position:"relative", right: "200rpx", top:"-5rpx"}}>浏览历史</Text>
                <Image source={{height: 25,width: 18,uri: `${cdnimg}/wecqupt/userinfo/arrow.png`}} />
            </View>
            <View style={{backgroundColor:"#E9E9E9", width: "100%", height: "2rpx", position: "relative",marginBottom: "40rpx",}}>
            </View>
            <View className="useritemsItem">
                <Image source={{height: 45,width: 43,uri: `${cdnimg}/wecqupt/userinfo/wtfk.png`}} style={{position:"relative",top:"-9rpx"}}/>
                <Text style={{color:"#3B3B3B", fontSize:"25rpx", fontWeight:"bold", position:"relative", right: "200rpx", top:"-5rpx"}}>问题反馈</Text>
                <Image source={{height: 25,width: 18,uri: `${cdnimg}/wecqupt/userinfo/arrow.png`}} />
            </View>
            <View className="useritemsItem">
                <Image source={{height: 45,width: 43,uri: `${cdnimg}/wecqupt/userinfo/gywm.png`}} style={{position:"relative",top:"-9rpx"}}/>
                <Text style={{color:"#3B3B3B", fontSize:"25rpx", fontWeight:"bold", position:"relative", right: "200rpx", top:"-5rpx"}}>关于我们</Text>
                <Image source={{height: 25,width: 18,uri: `${cdnimg}/wecqupt/userinfo/arrow.png`}} />
            </View>
        </View>
    )
}