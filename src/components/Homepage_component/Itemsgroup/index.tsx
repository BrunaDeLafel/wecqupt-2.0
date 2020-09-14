import { createElement, Fragment } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import './index.css';

interface iconObj {
    uri: string,
    text: string,
    path: string
}
interface Itemsprops {
    icons: iconObj[][],
}

export default function Itemsgroup(props: Itemsprops){

    return (
        <Fragment>
            {/* 将传来的上方图标数组进行循环渲染 */}
            <View className="Itemsgroup">
                {
                    props.icons[0].map(item => {
                        return <View className="ItemsgroupItem" onClick={() => history.pushState(null,null,item.path)}>
                            <Image source={{height: 70, width:70, uri: item.uri}}/>
                            <Text style={{color:'#3b3b3b',fontSize: '20rpx'}}>{item.text}</Text>
                        </View>
                    })
                }
            </View>
            {/* 将传来的下方图标数组进行循环渲染 */}
            <View className="Itemsgroup">
                {
                    props.icons[1].map(item => {
                        return <View className="ItemsgroupItem" onClick={() => history.pushState(null,null,item.path)}>
                            <Image source={{height: 70, width:70, uri: item.uri}}/>
                            <Text style={{color:'#3b3b3b',fontSize: '20rpx'}}>{item.text}</Text>
                        </View>
                    })
                }
            </View>
        </Fragment>
    )
}