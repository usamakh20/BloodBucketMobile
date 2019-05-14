let API_URL = 'http://bloodbucket.herokuapp.com/';

module.exports= {


    post : async function(url, body,auth,type="POST") {
        try {
            let response = await fetch(API_URL + url, {
                method: type,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":auth
                },
                body: JSON.stringify(body),
            });

            if (response.status === 200) {

                return await response.json();
            }
            else {
                throw await response.json();
            }
        }
        catch(e) {
            throw e;

        }
    },

    get: async function(url,auth) {

        try {
            let response = await fetch(API_URL + url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":auth
                },

            });


            if (response.status === 200) {
                return await response.json();
            }
            else {
                throw await response.json();
            }

        }
        catch(e) {
            throw e;

        }
    },

};