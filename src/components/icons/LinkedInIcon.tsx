import { useTheme } from "../../hooks/useTheme"
import { IconPropsType } from "./icon-props-type"

export default function LinkedInIcon({
   className = "",
   ...props
}: IconPropsType) {
   const { theme } = useTheme()

   return (
      <svg
         width={props.size}
         height={props.size}
         viewBox="3 3 18 18"
         version="1.1"
         preserveAspectRatio="xMidYMid"
         className={className}
         fill={`${theme === "light" ? "currentColor" : "#f4f4f4"}`}
      >
         <title>LinkedIn</title>
         <g id="LinkedIn">
            <g>
               <path d="M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5H18.44a2.5,2.5,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.44,3.06Zm1.5,15.38a1.511,1.511,0,0,1-1.5,1.5H5.56a1.511,1.511,0,0,1-1.5-1.5V5.56a1.511,1.511,0,0,1,1.5-1.5H18.44a1.511,1.511,0,0,1,1.5,1.5Z"></path>{" "}
               <g>
                  <path d="M6.376,10.748a1,1,0,1,1,2,0v6.5h0a1,1,0,0,1-2,0Z"></path>{" "}
                  <circle cx="7.376" cy="6.744" r="1"></circle>{" "}
                  <path d="M17.62,13.37v3.88a1,1,0,1,1-2,0V13.37a1.615,1.615,0,1,0-3.23,0v3.88a1,1,0,0,1-2,0v-6.5a1.016,1.016,0,0,1,1-1,.94.94,0,0,1,.84.47,3.609,3.609,0,0,1,5.39,3.15Z"></path>{" "}
               </g>
            </g>
         </g>
      </svg>
   )
}
