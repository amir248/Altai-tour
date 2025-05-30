function first(){
    return new Promise((resolve)=>{
        function ooK(){
            console.log('first');
        }
        resolve(ooK());
    });
    
};//first Funtion
function include(){
    return new Promise((resolve)=>{
        function sectond(){
            const firsto=document.createElement('script');
            firsto.src="public/js/include.js";
            document.querySelector('body').append(firsto);
        }
        resolve(sectond());
    });
};//include
async function main(){
    await first();
    await include();
}
main();