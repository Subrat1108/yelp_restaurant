import Axios from "axios";

export default Axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: 'Bearer '+'DovwqQNs3eMMNn4um3hF1lMBZ5gETtsxf2IbR3SbCQ-MzKM75mfJBEfcQasHqh4iZsJHsYZZBj1wkUuYsMjH3mZHCBr2EbYA5_5PNqD8qdVOce57IbBUqBS1ALb8XXYx'
    }
});
