import beverage from '../mock/beverage.js'

const getBev = () => {

    return new Promise ((resolve, reject) => {
        const ok = true;
        setTimeout(() =>{
            if (ok) {
                resolve(beverage);
            } else {
                reject('error');
            }
        }, 4000);

    })
}


export default getBev