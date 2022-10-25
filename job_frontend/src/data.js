import { HouseFill } from "react-bootstrap-icons"
import { BriefcaseFill } from "react-bootstrap-icons"



export const navitems = [
    {title:"Home",url:"/",icon:<HouseFill/>},
    {title:"Jobs",url:"/jobs",icon:<BriefcaseFill/>},
    {title:"Login",url:"/login"},
    {title:"Signup",url:"/signup"},
    {title:"Profile",url:"/profile"},
    {title:"Companies",url:"/companies"}
]

export const colors = ["info","primary","danger","warning","success"]

// exporting images
export {default as signupimage} from "./assests/images/signup.svg";