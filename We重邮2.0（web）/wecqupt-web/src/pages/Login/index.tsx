import { createElement, useState } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import request from 'universal-request';
import TextInput from 'rax-textinput';
/* import { platform } from 'universal-device' */
/* import Text from 'rax-text'; */
import { cdnurl } from '../../public/utils.js'
const { cdnimg } = cdnurl;

import './index.css';

export default function Login(){
    // 确定用户名和密码
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const makelogin = () => {
        // web端
        request({
            url: 'http://localhost:7001/login/newlogin',
            method: 'POST',
            data: {
                uname: username,
                pword: password,
                openid: 'web' + username
            },
        }).then(res => {
            console.log(res.data);
            // 如果登录成功，则返回主界面，将token和统一认证码存到localStorage中
            if(res.data.success) {
                window.localStorage.setItem('token', res.data.data.token);
                window.localStorage.setItem('username', username);
                window.localStorage.setItem('openid', 'web' + username);
                /* console.log('cache: ', window.localStorage); */
                window.location.href = '/';
            }
        })
    }

    return (
        <View className="login-index">
            {/* 上方表单 */}
            <View className="login-index-top">
                <View className="login-index-top-text">你好，</View>
                <View className="login-index-top-text">欢迎来到We重邮</View>
                {/* 文本输入框,统一认证码+密码 */}
                <TextInput
                placeholder="请输入统一认证码"
                placeholderColor="#E5E5E5"
                maxLength={7}
                style={{
                    marginTop: '40px',
                    fontSize: '22px',
                    width: '100%',
                    borderBottom: '1.5px solid #E5E5E5'
                }}
                onChangeText={text => {
                    // 拿到用户名
                    setUsername(text);
                }}
                ></TextInput>
                <TextInput
                placeholder="请输入密码"
                placeholderColor="#E5E5E5"
                maxLength={20}
                password
                style={{
                    marginTop: '65px',
                    fontSize: '22px', 
                    width: '100%',
                    borderBottom: '1.5px solid #E5E5E5'
                }}
                onChangeText={text => {
                    // 拿到密码
                    setPassword(text);
                }}
                ></TextInput>
                <View className="login-button" onClick={() => {
                    makelogin();
                }}>登录</View>
            </View>
            {/* 下方图片 */}
            <View className="login-index-bottom">
                <Image source={{height: 311.97, uri: `${cdnimg}/wecqupt/login/loginBottom.png`}}/>
            </View>

        </View>
    )
}