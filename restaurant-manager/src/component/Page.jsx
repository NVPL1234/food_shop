import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { GrPrevious, GrNext } from "react-icons/gr"
import { update } from '../redux/activePageSlice'

export default function Page(prop) {

    const getData = prop.getData
    const hidden = prop.hidden
    const totalPage = prop.totalPage
    const activePage = useSelector((state) => state.activePage.value)
    const dispatch = useDispatch()
    const [buttons, setButtons] = useState([])

    let handlePreviousPage = () => {
        if (activePage == 1)
            return
        if (totalPage > 7) {
            dispatch(update(activePage - 1))
            getData(activePage - 2)
            if (activePage > 4 && activePage == buttons[3].text)
                setButtons([
                    {
                        text: buttons[0].text - 1
                    },
                    {
                        text: buttons[1].text - 1
                    },
                    {
                        text: buttons[2].text - 1
                    },
                    {
                        text: buttons[3].text - 1
                    },
                    {
                        text: buttons[4].text - 1
                    },
                    {
                        text: buttons[5].text - 1
                    },
                    {
                        text: '...'
                    }
                ])
        }
        else {
            dispatch(update(activePage - 1))
            getData(activePage - 2)
        }
    }

    let handleChange = (button) => {
        if (button.text == '...')
            return
        if (totalPage > 7 && button.text > buttons[3].text && button.text != totalPage) {
            switch (totalPage - button.text) {
                case 1:
                    setButtons([
                        {
                            text: button.text - 5
                        },
                        {
                            text: button.text - 4
                        },
                        {
                            text: button.text - 3
                        },
                        {
                            text: button.text - 2
                        },
                        {
                            text: button.text - 1
                        },
                        {
                            text: button.text
                        },
                        {
                            text: button.text + 1
                        }
                    ])
                    break;
                case 2:
                    setButtons([
                        {
                            text: button.text - 4
                        },
                        {
                            text: button.text - 3
                        },
                        {
                            text: button.text - 2
                        },
                        {
                            text: button.text - 1
                        },
                        {
                            text: button.text
                        },
                        {
                            text: button.text + 1
                        },
                        {
                            text: button.text + 2
                        }
                    ])
                    break;
                case 3:
                    setButtons([
                        {
                            text: button.text - 3
                        },
                        {
                            text: button.text - 2
                        },
                        {
                            text: button.text - 1
                        },
                        {
                            text: button.text
                        },
                        {
                            text: button.text + 1
                        },
                        {
                            text: button.text + 2
                        },
                        {
                            text: button.text + 3
                        }
                    ])
                    break;
                default:
                    setButtons([
                        {
                            text: button.text - 3
                        },
                        {
                            text: button.text - 2
                        },
                        {
                            text: button.text - 1
                        },
                        {
                            text: button.text
                        },
                        {
                            text: button.text + 1
                        },
                        {
                            text: button.text + 2
                        },
                        {
                            text: '...'
                        }
                    ])
                    break;
            }
        }
        else if (totalPage > 7 && button.text < buttons[3].text && button.text > 1) {
            switch (button.text - 1) {
                case 1:
                    setButtons([
                        {
                            text: button.text - 1
                        },
                        {
                            text: button.text
                        },
                        {
                            text: button.text + 1
                        },
                        {
                            text: button.text + 2
                        },
                        {
                            text: button.text + 3
                        },
                        {
                            text: button.text + 4
                        },
                        {
                            text: '...'
                        }
                    ])
                    break;
                case 2:
                    setButtons([
                        {
                            text: button.text - 2
                        },
                        {
                            text: button.text - 1
                        },
                        {
                            text: button.text
                        },
                        {
                            text: button.text + 1
                        },
                        {
                            text: button.text + 2
                        },
                        {
                            text: button.text + 3
                        },
                        {
                            text: '...'
                        }
                    ])
                    break;
                case 3:
                    setButtons([
                        {
                            text: button.text - 3
                        },
                        {
                            text: button.text - 2
                        },
                        {
                            text: button.text - 1
                        },
                        {
                            text: button.text
                        },
                        {
                            text: button.text + 1
                        },
                        {
                            text: button.text + 2
                        },
                        {
                            text: '...'
                        }
                    ])
                    break;
                default:
                    setButtons([
                        {
                            text: button.text - 3
                        },
                        {
                            text: button.text - 2
                        },
                        {
                            text: button.text - 1
                        },
                        {
                            text: button.text
                        },
                        {
                            text: button.text + 1
                        },
                        {
                            text: button.text + 2
                        },
                        {
                            text: '...'
                        }
                    ])
                    break;
            }
        }
        dispatch(update(button.text))
        getData(button.text - 1)
    }

    let handleNextPage = () => {
        if (totalPage > 7) {
            if (activePage == totalPage)
                return
            dispatch(update(activePage + 1))
            getData(activePage)
            if (activePage > 3) {
                if (activePage + 4 == totalPage) {
                    setButtons([
                        {
                            text: buttons[0].text + 1
                        },
                        {
                            text: buttons[1].text + 1
                        },
                        {
                            text: buttons[2].text + 1
                        },
                        {
                            text: buttons[3].text + 1
                        },
                        {
                            text: buttons[4].text + 1
                        },
                        {
                            text: buttons[5].text + 1
                        },
                        {
                            text: totalPage
                        }
                    ])
                }
                else if (buttons[buttons.length - 1].text == '...') {
                    setButtons([
                        {
                            text: buttons[0].text + 1
                        },
                        {
                            text: buttons[1].text + 1
                        },
                        {
                            text: buttons[2].text + 1
                        },
                        {
                            text: buttons[3].text + 1
                        },
                        {
                            text: buttons[4].text + 1
                        },
                        {
                            text: buttons[5].text + 1
                        },
                        {
                            text: '...'
                        }
                    ])
                }
            }
        }
        else {
            if (activePage == totalPage)
                return
            dispatch(update(activePage + 1))
            getData(activePage)
        }
    }

    useEffect(() => {        
        dispatch(update(1))
        switch (totalPage) {
            case 1:
                setButtons([
                    {
                        text: 1
                    }
                ])
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
                break;
            case 4:
                setButtons([
                    {
                        text: 1
                    },
                    {
                        text: 2
                    },
                    {
                        text: 3
                    },
                    {
                        text: 4
                    }
                ])
                break;
            case 5:
                setButtons([
                    {
                        text: 1
                    },
                    {
                        text: 2
                    },
                    {
                        text: 3
                    },
                    {
                        text: 4
                    },
                    {
                        text: 5
                    }
                ])
                break;
            case 6:
                setButtons([
                    {
                        text: 1
                    },
                    {
                        text: 2
                    },
                    {
                        text: 3
                    },
                    {
                        text: 4
                    },
                    {
                        text: 5
                    },
                    {
                        text: 6
                    }
                ])
                break;
            case 7:
                setButtons([
                    {
                        text: 1
                    },
                    {
                        text: 2
                    },
                    {
                        text: 3
                    },
                    {
                        text: 4
                    },
                    {
                        text: 5
                    },
                    {
                        text: 6
                    },
                    {
                        text: 7
                    }
                ])
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
                    },
                    {
                        text: 4
                    },
                    {
                        text: 5
                    },
                    {
                        text: 6
                    },
                    {
                        text: '...'
                    }
                ])
                break;
        }
    }, [totalPage])

    return (
        <div className="row mt-3 page-num" hidden={hidden}>
            <button type="button" className="col-md-1 shadow-sm" onClick={e => handlePreviousPage()}><GrPrevious /></button>
            {
                buttons.map(button =>
                    <button key={button.text} type="button" className={activePage == button.text ? "col-md-1 shadow-sm active" : "col-md-1 shadow-sm"} onClick={e => handleChange(button)}>{button.text}</button>
                )
            }
            <button type="button" className="col-md-1 shadow-sm" onClick={e => handleNextPage()}><GrNext /></button>
        </div>
    )
}