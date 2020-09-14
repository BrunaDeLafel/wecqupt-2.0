import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import { cdnurl } from '../../../public/utils.js'
const { cdnimg } = cdnurl;

import './index.css';

export default function Userinfo2(){
    return (
        <View className="userInfo2">
            <View className="userinfo2Item">
                <Image source={{height: 70, width:70, uri: `${cdnimg}/wecqupt/shouye/cjcx.png`}}/>
                <Text style={{color:'#5D6E86',fontSize: '20rpx', fontWeight:400, marginTop: "20rpx"}}>我的成绩</Text>
            </View>
            <View className="userinfo2Item">
                <Image source={{height: 70, width:70, uri: `${cdnimg}/wecqupt/shouye/ksap.png`}}/>
                <Text style={{color:'#5D6E86',fontSize: '20rpx', fontWeight:400, marginTop: "20rpx"}}>考试安排</Text>
            </View>
            <View className="userinfo2Item">
                <Image source={{height: 70, width:70, uri: `${cdnimg}/wecqupt/userinfo/zyhd.png`}}/>
                <Text style={{color:"#5D6E86",fontSize: '20rpx', fontWeight:400, marginTop: "20rpx"}}>志愿时长</Text>
            </View>
            <View className="userinfo2Item">
                <Image source={{height: 70, width:70, uri: `${cdnimg}/wecqupt/userinfo/wdjy.png`}}/>
                <Text style={{color:'#5D6E86',fontSize: '20rpx', fontWeight:400, marginTop: "20rpx"}}>我的借阅</Text>
            </View>
        </View>
    )
}