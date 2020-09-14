import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import './index.css';

export default function Userinfo1(){
    return (
        <View className="userInfo1">
            <View className="userinfo1Top">
                <View className="info1Topitem">
                    {/*<Image source={{height:"100%", width:"100%", uri:''}}/>*/}
                </View>
                <View style={{position:'relative',right: '116rpx'}}>
                    <Text style={{fontSize:"35rpx", fontWeight:560, color:"#333333",marginBottom:"6rpx", marginTop:"12rpx"}}>泽锐</Text>
                    <Text style={{fontSize:"22rpx", color:"#A5A5A5", fontWeight:550, letterSpacing:"1rpx"}}>2017215103</Text>
                </View>
                <Image source={{height: 25,width: 18,uri:"https://wequpt-1259210999.cos.ap-chongqing.myqcloud.com/wecqupt/userinfo/arrow.png"}} style={{marginTop:"24rpx"}}/>
            </View>
            <View className="userinfo1Bottom">
                <View className="info1Bottomitem">
                    <Text style={{fontSize:"46rpx", fontWeight:600, color:"#333333"}}>10</Text>
                    <Text style={{fontSize:"21rpx",color:"#5D6E86"}}>一卡通余额</Text>
                </View>
                <View className="info1Bottomitem">
                    <Text style={{fontSize:"46rpx", fontWeight:600, color:"#EF4B4B"}}>3</Text>
                    <Text style={{fontSize:"21rpx",color:"#5D6E86"}}>晚归记录</Text>
                </View>
            </View>
        </View>
    )
}