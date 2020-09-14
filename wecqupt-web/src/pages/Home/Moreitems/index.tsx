import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import { cdnurl } from '../../../public/utils.js'
const { cdnimg } = cdnurl;

import './index.css';

// 规范blockitem Interface的类型
interface blockitemInerface {
    title: string;
    icons: {
        uri: string;
        text: string;
        path: string;
    }[];
}

// 更多功能页面的所有model
let blockitem: Array<blockitemInerface> = [
    {
        title:'教务功能',
        icons:[
            {uri:`${cdnimg}/wecqupt/shouye/kbcx.png`, text:'课表查询', path:'/kebiao'},
            {uri:`${cdnimg}/wecqupt/shouye/kxjs.png`, text:'空闲教室', path:''},
            {uri:`${cdnimg}/wecqupt/shouye/cjcx.png`, text:'成绩查询', path:''},
            {uri:`${cdnimg}/wecqupt/shouye/ksap.png`, text:'考试安排', path:''},
            {uri:`${cdnimg}/wecqupt/shouye/jscx.png`, text:'教室申请', path:''},
            {uri:`${cdnimg}/wecqupt/moreitems/ssxx.png`, text:'师生信息', path:''},
            {uri:`${cdnimg}/wecqupt/moreitems/jccx.png`, text:'教材查询', path:''},
            {uri:`${cdnimg}/wecqupt/moreitems/ck.png`, text:'蹭课', path:''},
        ]
    },
    {
        title:'信息查询',
        icons:[
            {uri:`${cdnimg}/wecqupt/shouye/xyzx.png`, text:'校园资讯', path:'/'},
            {uri:`${cdnimg}/wecqupt/moreitems/txxx.png`, text:'通讯信息', path:''},
            {uri:`${cdnimg}/wecqupt/moreitems/cydt.png`, text:'重邮地图', path:''},
            {uri:`${cdnimg}/wecqupt/moreitems/cyxl.png`, text:'重邮校历', path:''},
        ]
    },
    {
        title:'其他功能',
        icons:[
            {uri:`${cdnimg}/wecqupt/shouye/tscx.png`, text:'图书查询', path:'/kebiao'},
            {uri:`${cdnimg}/wecqupt/userinfo/wdjy.png`, text:'借阅信息', path:''},
            {uri:`${cdnimg}/wecqupt/userinfo/zyhd.png`, text:'志愿时长', path:''},
            {uri:`${cdnimg}/wecqupt/moreitems/wgjl.png`, text:'晚归记录', path:''},
            {uri:`${cdnimg}/wecqupt/moreitems/hqfw.png`, text:'后勤服务', path:''},
            {uri:`${cdnimg}/wecqupt/moreitems/ykt.png`, text:'一卡通', path:''},
        ]
    }
];

export default function Moreitems(){

    const [itemsArr,changeItem] = useState(blockitem);

    return (
        <View className="moreitems">
            {
                itemsArr.map(item => {
                    return <View className="itemBlock">
                        <Text style={{fontSize:"30rpx"}}>{item.title}</Text>
                        <View className="itemBlockIcons">
                            {
                                item.icons.map(item => {
                                    return <View style={{width: "166rpx",height: "140rpx", justifyContent: "center",alignItems: "center", boxShadow:"0px 0px 10rpx rgba(156,156,156,0.16)", marginTop:"35rpx"}}>
                                            <Image source={{height: 80, width: 80, uri: item.uri}}/>
                                            <Text style={{fontSize: "20rpx", color: "#3B3B3B", marginTop:"2rpx", fontWeight: "bold"}}>{item.text}</Text>
                                        </View>
                                })
                            }
                        </View>
                    </View>
                })
            }
        </View>
    )
}