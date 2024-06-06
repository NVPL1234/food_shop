import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/pageNumberSlice'
import { GrPrevious, GrNext } from "react-icons/gr"
import axios from "axios"
import { url } from "../url"

export default function Page() {

    // const pageNumber = prop.pageNumber
    // const setPageNumber = prop.setPageNumber
    const pageNumber = useSelector((state) => state.pageNumber.value)
    const dispatch = useDispatch()
    const [totalProduct, setTotalProduct] = useState(0)
    const [buttons, setButtons] = useState([])
    const [active, setActive] = useState(1)
    const [disabled, setDisabled] = useState(false)

    let countProduct = async () => {
        await axios.get(url + "products/count", {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzE2OTU1MDY2LCJleHAiOjE3MTc1NTk4NjZ9.lkr5KtHb4-0URbTvPEqKy7TB8YUs7B1uQPL1K3qbqXyF_tPwq9qGigwa2VQO2BxsQ3i8sEzJLFTj3fR5JSlkmw'
            }
        })
            .then(res => {
                let totalProduct = res.data
                let totalPage = Math.ceil(totalProduct / 10)
                switch (totalPage) {
                    case 1:
                        setButtons([
                            {
                                text: 1
                            }
                        ])
                        setDisabled(true)
                        break;
                    case 2:
                        setButtons([
                            {
                                text: 1
                            },
                            {
                                text: 2
                            }
                        ])
                        setDisabled(true)
                        break;
                    case 3:
                        setButtons([
                            {
                                text: 1  
                            }, 
                            {
                                text: 2
                            },
                            {
                                text: 3
                            }
                        ])
                        setDisabled(true)
                        break;
                    default:
                        setButtons([
                            {
                                text: 1
                            }, 
                            {
                                text: 2
                            },
                            {
                                text: 3
                            }
                        ])
                        break;
                }
                setTotalProduct(totalProduct)
            })
            .catch(e => console.log(e.message))
    }

    let handlePreviousPage = () => {
        // pageNumber >= 1 ? setPageNumber(pageNumber - 1) : setPageNumber(0)
        // setButtons(...buttons, [
        //     {
        //         text: buttons[active - 1].text - 1
        //     }
        // ])
    }

    let handleChange = (button) => {
        // setPageNumber(button.text - 1)
        setActive(button.text)
    }

    let handleNextPage = () => {
        // dispatch(increment())
        console.log(active);
        let totalPage = Math.ceil(totalProduct / 10)
        if (totalPage - pageNumber == 1) {
            setDisabled(true)
            return
        }
        else if (totalPage - pageNumber <= 3) {
            dispatch(increment())
            setActive(active + 1)
            setButtons([
                {
                    text: buttons[0].text,
                },
                {
                    text: buttons[1].text
                },
                {
                    text: buttons[2].text
                }
            ])
        }
        else if (pageNumber < totalPage) {
            dispatch(increment())
            setActive(active + 1)
            setButtons([
                {
                    text: buttons[1].text
                },
                {
                    text: buttons[2].text
                },
                {
                    text: buttons[2].text + 1
                }
            ])
        }
        else
            alert("het danh sach!")
    }

    useEffect(() => {
        countProduct()
    }, [])

    return (
        <div className="row mt-3 page-num">
            <button type="button" className="col-md-1 shadow-sm" onClick={e => handlePreviousPage()}><GrPrevious /></button>
            {
                buttons.map(button =>
                    <button key={button.text} type="button" className={active == button.text ? "col-md-1 shadow-sm active" : "col-md-1 shadow-sm"} onClick={e => handleChange(button)}>{button.text}</button>
                )
            }
            <button type="button" className="col-md-1 shadow-sm" onClick={e => handleNextPage()} disabled={disabled}><GrNext /></button>
        </div>
    )
}