import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../store/storeSlices/chatsSlice';
import { sendToChatGpt } from '../api/chatBox.api';
import chatGptLogo from '../images/chatGptLogo.png';
import loadingLogo from '../images/loading.gif';
import userLogo from '../images/user.png';


function ChatBox() {
    const userMsg = useRef();
    const dispatch = useDispatch();

    const [activeLogo, setActiveLogo] = useState(chatGptLogo);

    const allChats = useSelector((state) => {
        return state.chats;
    });


    const sendMsg = () => {
        if (userMsg.current.value.trim().length <= 0) {
            return;
        }
        const msgBtn = document.getElementById('msgBtn');
        msgBtn.disabled = true;
        setTimeout(() => {
            msgBtn.disabled = false;
        }, 1000)
        console.log(userMsg.current.value);
        CreateChat('user', userMsg.current.value);
        userMsg.current.value = '';
    }

    const CreateChat = async (owner, msg) => {
        let chatObj =
        {
            owner: owner,
            msg: msg
        }


        dispatch(addChat(chatObj));
        scrollToBottom();

        if (owner !== 'ai') {
            setActiveLogo(loadingLogo);
            let data = await sendToChatGpt(chatObj);

            if (data?.data) {
                CreateChat('ai', data.data.content);
            }
            setActiveLogo(chatGptLogo);
            console.log('response from chatGpt ::::', data);
        }

    }

   

    const scrollToBottom = () => {
        
        const chatContainer = document.getElementById('chatContainer');
        setTimeout(() => {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 200)
    }
    return (
        <div className='chatboxHolder'>
            <div className="chatBox">
                <div className='chat_title'>
                    Chats
                    <img className='chatGptLogo' src={activeLogo} alt="chatGptLogo" />
                </div>

                <div id="chatContainer">
                    {
                        allChats?.map((c, index) =>
                            <div key={'chat_' + index} className={c.owner}>
                                <span>
                                    <img style={{ width: '25px', marginRight: '10px' }} src={c.owner === 'ai' ? chatGptLogo : userLogo} alt="profile_pic" />
                                </span>
                                <span id={'chatMsg' + index}>{c.msg }</span>
                            </div>
                        )
                    }
                </div>

                <div className="chat_actionBar">
                    <input ref={userMsg} type="text" placeholder='enter Msg' />
                    <button id='msgBtn' type='button' onClick={sendMsg} className='sendMsgBtn' >Send</button>
                </div>
            </div>

        </div>
    )
}

export default ChatBox