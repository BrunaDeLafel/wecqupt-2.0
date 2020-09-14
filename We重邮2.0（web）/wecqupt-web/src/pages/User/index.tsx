import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import { cdnurl } from '../../public/utils.js'
const { cdnimg } = cdnurl;

import './index.css';
import Userinfo1 from '../../components/Userpage_component/Userinfo1';
import Userinfo2 from '../../components/Userpage_component/Userinfo2';
import Useritems from '../../components/Userpage_component/Useritems';

export default function User(){
    return (
        <View className="user">
            {/* 个人页面上方背景图 */}
            <View>
                <Image source={{height:400, width:"100%", uri: `${cdnimg}/wecqupt/userinfo/background.png`}}/>
            </View>
            {/* 用户具体信息 */}
            <Userinfo1></Userinfo1>
            <Userinfo2></Userinfo2>
            <Useritems></Useritems>
        </View>
    )
}