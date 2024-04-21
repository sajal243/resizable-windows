import React , { useRef, useEffect }  from 'react'
import "../App.css";

const ResizableBox = ({id}) => {

    const parentRef = useRef(null);
    const ref = useRef(null);
    const refLeft = useRef(null);
    const refTop = useRef(null);
    const refRight = useRef(null);
    const refBottom = useRef(null);

  
    useEffect(() => {
      const resizeableEle = ref.current;
    //   const parentRefEle = parentRef.current;
    //   const parStyle = window.getComputedStyle(parentRefEle)
    //   const parStyleWidth =  parseInt(parStyle.width, 10);

    //   console.log(parStyleWidth)
      const styles = window.getComputedStyle(resizeableEle);
      let width = parseInt(styles.width, 10);
      let height = parseInt(styles.height, 10);
      let x = 0;
      let y = 0;
  
    //   resizeableEle.style.top = "50px";
    //   resizeableEle.style.left = "50px";
  
      // Right resize
      const onMouseMoveRightResize = (event) => {
        const dx = event.clientX - x;
        x = event.clientX;
        width = width + dx;

        // console.log(parentRefEle.style.width);
        // if(width < parStyleWidth){
            resizeableEle.style.width = `${width}px`;
        // }
       
      };
  
      const onMouseUpRightResize = (event) => {
        document.removeEventListener("mousemove", onMouseMoveRightResize);
        // parentRefEle.style.width = `${width}px`;
      };
  
      const onMouseDownRightResize = (event) => {
        x = event.clientX;
        resizeableEle.style.left = styles.left;
        resizeableEle.style.right = null;
        document.addEventListener("mousemove", onMouseMoveRightResize);
        document.addEventListener("mouseup", onMouseUpRightResize);
      };
  
      // Top resize
      const onMouseMoveTopResize = (event) => {
        const dy = event.clientY - y;
        height = height - dy;
        y = event.clientY;
        resizeableEle.style.height = `${height}px`;
        resizeableEle.style.top = `${parseInt(styles.top, 10) + dy}px`;
      };
  
      const onMouseUpTopResize = (event) => {
        document.removeEventListener("mousemove", onMouseMoveTopResize);
      };
  
      const onMouseDownTopResize = (event) => {
        y = event.clientY;
        const styles = window.getComputedStyle(resizeableEle);
        resizeableEle.style.bottom = styles.bottom;
        resizeableEle.style.top = null;
        document.addEventListener("mousemove", onMouseMoveTopResize);
        document.addEventListener("mouseup", onMouseUpTopResize);
      };
  
      // Bottom resize
      const onMouseMoveBottomResize = (event) => {
        const dy = event.clientY - y;
        height = height + dy;
        y = event.clientY;
        resizeableEle.style.height = `${height}px`;
      };
  
      const onMouseUpBottomResize = (event) => {
        document.removeEventListener("mousemove", onMouseMoveBottomResize);
      };
  
      const onMouseDownBottomResize = (event) => {
        y = event.clientY;
        const styles = window.getComputedStyle(resizeableEle);
        resizeableEle.style.top = styles.top;
        resizeableEle.style.bottom = null;
        document.addEventListener("mousemove", onMouseMoveBottomResize);
        document.addEventListener("mouseup", onMouseUpBottomResize);
      };
  
      // Left resize
      const onMouseMoveLeftResize = (event) => {
        const dx = event.clientX - x;
        x = event.clientX;
        width = width - dx;

        // if(width < parStyleWidth){
            resizeableEle.style.width = `${width}px`;
            resizeableEle.style.left = `${parseInt(styles.left, 10) + dx}px`;
        // }
      };
  
      const onMouseUpLeftResize = (event) => {
        document.removeEventListener("mousemove", onMouseMoveLeftResize);
      };
  
      const onMouseDownLeftResize = (event) => {
        x = event.clientX;
        resizeableEle.style.right = styles.right;
        resizeableEle.style.left = null;
        document.addEventListener("mousemove", onMouseMoveLeftResize);
        document.addEventListener("mouseup", onMouseUpLeftResize);
      };
  
      // Add mouse down event listener
      const resizerRight = refRight.current;
      resizerRight.addEventListener("mousedown", onMouseDownRightResize);
      const resizerTop = refTop.current;
      resizerTop.addEventListener("mousedown", onMouseDownTopResize);
      const resizerBottom = refBottom.current;
      resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);
      const resizerLeft = refLeft.current;
      resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);
  
      return () => {
        resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
        resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
        resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
        resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
      };
    }, []);

  return (
    <div ref={parentRef} className="container">
        <div ref={ref} className="resizeable">
            Lorem ipsum
            <div ref={refLeft} className="resizer resizer-l"></div>
            <div ref={refTop} className="resizer resizer-t"></div>
            <div ref={refRight} className="resizer resizer-r"></div>
            <div ref={refBottom} className="resizer resizer-b"></div>
        </div>
    </div>

  )
}

export default ResizableBox