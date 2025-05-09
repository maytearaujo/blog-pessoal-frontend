import { createContext, ReactNode, useState } from "react"
import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { ToastAlerta } from "../utils/ToastAlerta"

// Personalizar de acordo com o meu projeto
interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

// Funcao obrigatoria sempre que trabalhamos com context
interface AuthProviderProps {
    children: ReactNode
}

// Instanciando o createContext - Linha padroao do context
export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    //Personalizar de acordo com a lógica om o meu projeto
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: null,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            ToastAlerta("Usuário foi autenticado com sucesso!", "sucesso")
        } catch (error) {
            ToastAlerta("Os dados do Usuário estão inconsistentes!", "erro")
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({
            id: null,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
