/* eslint-disable prettier/prettier */
export const delay =async ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 2000); // Delay for 1 second
    });
}