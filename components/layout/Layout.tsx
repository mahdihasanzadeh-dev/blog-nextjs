import React, { Fragment,useContext } from 'react'
import {Notification} from '../ui'
import {NotificationContext} from '../../store/notificationContext'
import MainNavigation from './MainNavigation/MainNavigation'
type LayoutProps = {
    children:React.ReactNode
}
const Layout:React.FC<LayoutProps> =({children})=> {
    const NotificationCtx = useContext(NotificationContext)
    const activeNotification = NotificationCtx.notification
    return (
        <Fragment>
            <MainNavigation />
            <main>
                {children}
            </main>
            {
                activeNotification &&  
                <Notification
                    title={activeNotification.title}
                    message={activeNotification.message}
                    status={activeNotification.status}
                />
            }

        </Fragment>
    )
}

export default Layout
