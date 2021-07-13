
// 在滚动的时候防抖
export default function (fn,ms=100) {
    let time = null; 
    return () => {
        clearTimeout(time);
      time = setTimeout(() => {
            fn();
        },ms)
    }
}