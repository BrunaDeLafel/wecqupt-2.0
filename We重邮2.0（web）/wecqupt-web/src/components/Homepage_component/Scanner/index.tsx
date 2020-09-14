import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Slider from 'rax-slider';
import Image from 'rax-image';


import './index.css';
// ts interface规范传递的prop的类型
interface ScannerProps {
    uriArr: Array<string>
}

// 通过父组件，传入对应的主页轮播图片url
export default function Scanner(props: ScannerProps){
    return (
        <View className="Scanner">
            <Slider width="620" height="250" autoPlay={true}>
                {/* 通过父组件给出的数组数量（props.uriArr.length），进行列表渲染 */}

                {
                    props.uriArr.map(item => {
                        return <View>
                            <Image source={{height: 250, width:620, uri: item}}/>
                        </View>
                    })
                }
            </Slider>
        </View>
    )
}