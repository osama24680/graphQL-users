const { UserList, MovieList } = require("../FakeData")
const _ = require("lodash")

const resolvers = {
    Query: {
        users:(parent)=> {
            return UserList
        },
        user: (parent, args,context,info) => {
            const id = args.id
            const user = _.find(UserList, { id: Number(id) })
            // user = UserList.filter(el => el.id === id)
            return user
        },
        movies() {
            return MovieList
        },
        movie: (parent, args) => {
            const name = args.name
            const movie = _.find(MovieList, { name})
            return movie
        }

    },

    User: {
        favouritMovies: (parent) => {
            const favMovies = _.filter(MovieList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010)
            return favMovies
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const lastID = UserList[UserList.length - 1].id
            user.id = lastID + 1
            UserList.push(user)
            return user
        },
        updateUserName: (parent, args) => {
            const { id, newUserName } = args.input
            let userUdtated;
            UserList.forEach(user => {
                if (user.id === id) {
                    user.username = newUserName
                    userUdtated = user
                }
            })
            return userUdtated
        },
        deleteUser:(parent, args)=>{
            const id=args.id
            _.remove(UserList,(user)=>user.id===Number(id))
            return null
        }
    }
}
module.exports = { resolvers }