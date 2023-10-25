import { Theme } from "@/shared/consts/theme"
import { useTheme } from "@/shared/hooks/useTheme"
import { Icon } from "@/shared/ui"




export const SwitchButton = () => {
    const {theme, toggleTheme} = useTheme()
    
    return(
        <div onClick={toggleTheme}>
            {
                theme === Theme.DARK ? <Icon type="Light" /> : <Icon type="Dark"/>
            }
        </div>
    )
}