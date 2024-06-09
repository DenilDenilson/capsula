'use server'

import { signIn, signOut } from '@/auth'
import { CredentialsSignin } from 'next-auth'
import { isRedirectError } from 'next/dist/client/components/redirect'

export async function getUser (username: string, password: string) {
  if (username === 'admin' && password === 'admin') {
    console.log('*** usuario correcto')
    return { id: username, name: username }
  }
  return null
}

export async function signOutServer () {
  await signOut()
}

export async function signInServer (credentials: Partial<Record<'username' | 'password', unknown>>): Promise<{ error: boolean }> {
  console.log('Iniciando sesión...')
  try {
    await signIn('credentials', credentials)
    return { error: false } // Evitar el error del return
  } catch (error) {
    // Siempre entra acá ¿?
    console.log('*** Catch iniciar sesion: ', error)
    if (error instanceof CredentialsSignin) {
      console.log('*** Error de credenciales al iniciar sesión')
      return { error: true }
    } else if (isRedirectError(error)) {
      // Este error se lanza al hacer un redirect
      // porque el usaurio ya está logueado
      console.error('*** NEXT_REDIRECT - Inicio de sesión correcto ¿?')
      return { error: false }
    } else {
      console.error('*** Error al iniciar sesión de tipo desconocido', error)
      return { error: true }
    }
  }
}
