import Icon from "@/components/Icon";
import getComponentRootDom from "./getComponentRootDom"
import styles from "./showMessage.module.less"
export default function (option){ 
    const content = option.content || "",
          type = option.type || "info", 
          duration = option.duration || 2000,
          dom = option.dom || document.body;
    
    // 创建消息元素
    let div = document.createElement("div");
    let iconDom = getComponentRootDom(Icon,{
        type
    });
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
    // 设置样式
    const typeClassName = styles[`message-${type}`]; //类型样式名
    div.className = `${styles.message} ${typeClassName}`;

    // 容器的position是否改动过
    if(getComputedStyle(dom).position === "static"){
        dom.style.position = "relative";

    } 
    dom.appendChild(div)
    
    // 使浏览器强行渲染页面
    div.clientHeight; //导致reflow

    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;

        div.addEventListener("transitionend",() =>{
            div.remove;
            option.callback && option.callback();
        },{once:true})
    },duration)
    
}