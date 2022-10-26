import { title } from "process"

type ListaUser = {
    id: string,
    name:string,
    phone:string,
    email:string,
    website:string,
    posts:Posts[]
}

type Users = {
    id: string,
    listaUser: ListaUser[],
}

type Posts = {
    id:string,
    title:string,
    body:string,
    userId:string,
}

export const users:Users[] = [
    {
        id: 'Usuarios',
        listaUser: [
            {
                id: '001',
                name: 'Joselino',
                phone: '2726-9887',
                email: 'joselino-onlie@hotmail.com',
                website: 'www.joselino.com.br',
                posts: [
                    {
                    id: '12936748234',
                    title: 'Olha essa comida gostasa que eu fiz!',
                    body: 'Foto de uma comida caseira que parece apetitosa',
                    userId: '001'
                    },
                ]
            },
            {
                id: '002',
                name: 'Ana Banana',
                phone: '8876-8764',
                email: 'ana_bananinha@gmail.com',
                website: 'www.ban-ana.com.br',
                posts: [
                    {
                        id: '736495734564',
                        title: 'Por do sol bonito',
                        body: 'Alguém sabe me dizer onde encontro uma vista bonita para o por do sol na cidade de Piraporinha?',
                        userId: '002'
                    },
                ]
            },
            {
                id: '003',
                name: 'Jul',
                phone: '3453-4387',
                email: 'julassilva@mail.com',
                website: 'www.juju.com.br',
                posts: [
                    {
                        id: '7356484564',
                        title: 'Bom dia meus amigos e amigas!',
                        body: 'Hoje é um dia especial pra quem quer, infelizmente eu não quero.',
                        userId: '003'
                    },
                ]
            },
        ]
    }
]

/*export const posts:Posts[]=[
    {
        id: '12936748234',
        title: 'Olha essa comida gostasa que eu fiz!',
        body: 'Foto de uma comida caseira que parece apetitosa',
        userId: '001'
    },
    {
        id: '7356484564',
        title: 'Bom dia meus amigos e amigas!',
        body: 'Hoje é um dia especial pra quem quer, infelizmente eu não quero.',
        userId: '003'
    },
    {
        id: '736495734564',
        title: 'Por do sol bonito',
        body: 'Alguém sabe me dizer onde encontro uma vista bonita para o por do sol na cidade de Piraporinha?',
        userId: '002'
    },
]*/