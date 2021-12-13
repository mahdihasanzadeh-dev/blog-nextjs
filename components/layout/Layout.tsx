import React, { Fragment } from 'react'
import MainNavigation from './MainNavigation'
type LayoutProps = {
    children:React.ReactNode
}
const Layout:React.FC<LayoutProps> =({children})=> {
    return (
        <Fragment>
            <MainNavigation />
            <main>
                {children}
            </main>
        </Fragment>
    )
}

export default Layout
