'use server'

export async function getUser (username: string, password: string) {
  if (username === 'admin' && password === 'admin') {
    console.log('*** usuario correcto')
    return { id: username, name: username }
  }
  return null
}
