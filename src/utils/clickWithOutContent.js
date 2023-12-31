const clickWithOutContent = (content, contentActive, action) => {
    const contentFunc = (e) => {
        if (contentActive && !content.contains(e.target)) {
            action(false);
        }
    }
    window.addEventListener('mousedown', contentFunc)

    return contentFunc
}


export default clickWithOutContent