"use client"
import { createContext } from 'react'


export const BarContext = createContext({
     activePath: "",
     openItem: "",
     handleOpenItem: () => { },
     handleCloseItem: () => { },
     handleActivePath: () => { }

})