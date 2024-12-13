import axios from "axios";
export const addUser = (data) => {
    fetch('https://fakestoreapi.com/users', {
        method: "POST",
        body: JSON.stringify(
            {
                email: 'Johna@gmail.com',
                username: 'johndaa',
                password: 'm36rmF$',
                name: {
                    firstname: 'Johni',
                    lastname: 'Doee'
                },
                address: {
                    city: 'kilcoole',
                    street: '7835 new road',
                    number: 3,
                    zipcode: '12926-3864',
                    geolocation: {
                        lat: '-37.3119',
                        long: '81.1396'
                    }
                },
                phone: '1-570-235-7033'
            }
        )
    })
}


// export const addUser = (data) => {
//     axios.post('https://fakestoreapi.com/auth/login', {
//         address: {
//             city: "",
//             geolocation:{
//                 lat:"",
//                 long:""
//             },
//             number: "",
//             street:"",
//             zipcode: ""
//         },
//         email: "",
//         id: "11",
//         name: {
//             firstname: "",
//             lastname: ""
//         },
//         password: data.password,
//         phone:"",
//         username: data.username,
//         __v: 0
//     })
//     alert("User added!")
// }

export const verifyUser = async (info) => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/users');
        console.log(data);
        const ckeckUser = data.find(user => user.username === info.username && user.password === info.password);
        return ckeckUser;
    } catch {
        console.error('Error verifying user:', error);
        return false;
    }
};


