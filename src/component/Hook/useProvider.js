 
import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"

const useProvider = () => {
    return useContext(AuthContext)
}
export default useProvider;  