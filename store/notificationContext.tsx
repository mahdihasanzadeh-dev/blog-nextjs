import React,{useState, useEffect} from "react"


type NotificationContextProviderProps={
    children:React.ReactNode
}
type activeNotificationType={
    title:string,
    message:string,
    status:'success' | 'error'| 'pending'
}
type NotificationContextType ={
    notification:activeNotificationType | null,
    showNotification :(notif:activeNotificationType)=>void,
    hideNotification:()=>void
}
export const NotificationContext = React.createContext({
    notification:null,//{status,title,message}
    showNotification:function(){},
    hideNotification:function(){},
} as NotificationContextType)

const NotificationContextProvider:React.FC<NotificationContextProviderProps> = ({children})=>{
    const [activeNotification,setActiveNotification] = useState<activeNotificationType | null>(null)
    useEffect(()=>{
        let timer: ReturnType<typeof setTimeout>;
        if(activeNotification && (activeNotification.status==='success' || activeNotification.status==='error')){
            timer =  setTimeout(()=>{
              
                setActiveNotification(null)
            },3000)
        }
        return ()=>{
            clearTimeout(timer)
        }
    },[activeNotification])
    const showNotificationHandler = (notificationData:activeNotificationType)=>{
        setActiveNotification(notificationData)
    }
    const hideNotificationHandler = ()=>{
        setActiveNotification(null)
    }
    
    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
      };
      
    
    return(
        <NotificationContext.Provider value={context}>
            {children}
        </NotificationContext.Provider>
    )
}
export default NotificationContextProvider;
