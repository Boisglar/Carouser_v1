import React, { Children, cloneElement, useEffect, useState } from 'react'
import{ FaChevronLeft, FaChevronRight} from "react-icons/fa"

import "./Carousel.css"

const PAGE_WIDTH = 900

export const Carousel = ({ children })  => {
    const[ pages, setPages] = useState([])
    const [ offset, setOffSet ] = useState(0)

    const handeleLefArrowClick = () => {

        setOffSet((currentOffSet)=> {
            const newOffset = currentOffSet + PAGE_WIDTH
             return Math.min(newOffset, 0)
           
    
            
        })
    };
     
    const handeleRightArrowClick = () => {

        setOffSet((currentOffSet) => {
            const newOffset = currentOffSet - PAGE_WIDTH
             return Math.max(newOffset, -1800 )
             
           
         }) 
    }


    useEffect(()=>{
        setPages(
            Children.map(children, (child)=>{
                return cloneElement(child, {
                    style: {
                        height:"500px",
                        minWidth:`${PAGE_WIDTH}px`,
                        maxWidth:`${PAGE_WIDTH}px`,
                    },
                })
            })
        )
    }, [])




  return (
    <div className='main-container'>
        <FaChevronLeft className='arrow' onClick={handeleLefArrowClick}/>
        <div className='window'>
            <div className='all-pages-container'
            style={{
                 transform: `translateX(${offset}px)`, 
            }}
            >{pages}</div>
        </div>
        <FaChevronRight className='arrow' onClick={handeleRightArrowClick} />
    </div>
  )
}
