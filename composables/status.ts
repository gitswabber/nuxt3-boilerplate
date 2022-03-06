export const useShowSideBar = () => useState<boolean>('showSideBar', () => true)

export const useGreetings = () => useState<string>('greetings', () => 'Hello Nuxt3 world!')
