import React from 'react'
import { Search, PhoneInTalk } from '@material-ui/icons';
import headerStyle from './headerStyle.module.scss'


export const Header = props => {
    return (
        <>
            <div className={headerStyle.flexContainer}>
                <div className={headerStyle.siteName}>Junno</div>
                <div className={headerStyle.searchBox}>
                    <input className={headerStyle.inputSearch}
                        placeholder="Enter Your Search Key..." />
                    <button className={headerStyle.searchBtn}>
                        <Search fontSize="large" />
                    </button>
                </div>
            
            <div className={headerStyle.phoneIcon}>
                        <PhoneInTalk style={{ fontSize: 40 }} />
                    </div>
                    <div className={headerStyle.call}>
                        <div className={headerStyle.callText}>Call us:</div>
                        <div className={headerStyle.callNumber}>(+123)4567890</div>
                    </div>
                    <div >
                        <button className={headerStyle.loginBtn}>Login</button>
                    </div>
            
                    
               
            </div>
            <div>{props.children}</div>
        </>
    )
}
