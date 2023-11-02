import axios from 'axios';

export const apiUser = {
    getData: async () => {
        return await axios
            .get('https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM')
            .then(res => {
                return res.data;
            });
    },
};
