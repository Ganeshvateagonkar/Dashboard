import "../App.css"
import { useEffect, useState } from 'react'

const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);


    useEffect(() => {
        props.onCollapse(inactive);
    }, [inactive, props])

    return (
        <div className={`side-menu  ${inactive ? 'inactive' : ''}`}>
            <div className="top-section">
                <div onClick={() => setInactive(!inactive)} className="toggle-button">
                    <i class="bi bi-justify"></i>
                </div>

            </div>
            <div className="search-controller">
                <button className="search-btn">
                    <i class="bi bi-search"></i>
                </button>

                <input type="text" placeholder="search" />
            </div>
            <div className="divider">

            </div>
            <div className="main-menu">
                <ul>
                    <li>
                        <a href='/dashboard' className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-speedometer2"></i>
                            </div>
                            <span> Dashboard</span></a>
                    </li>
                    <li>
                        <a href='/content' className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-house-fill"></i>
                            </div>
                            <span> Content</span></a>
                    </li>
                    <li>
                        <a href='/design' className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-cart-check"></i>
                            </div>
                            <span> Design</span></a>
                    </li>
                    <li>
                        <a href='/contact' className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-person-rolodex"></i>
                            </div>
                            <span> Contact</span></a>
                    </li>
                </ul>
            </div>
            <div className="side-menu-footer">
                <div className="avtar">
                    <i class="bi bi-facebook"></i>

                </div>
                <div className="avtar link">
                    <i class="bi bi-linkedin"></i>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;