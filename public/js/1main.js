// function first(){
//     return new Promise((resolve)=>{
//         function ooK(){
//             console.log('first');
//         }
//         resolve(ooK());
//     });
    
// };//first Funtion
function include(){
    return new Promise((resolve)=>{
        function sectond(){
            const firsto=document.createElement('script');
            firsto.src="public/js/include.js";
            document.querySelector('body').append(firsto);
        }
        setTimeout(()=>{
            resolve(sectond());
        },0);
    });
};//include
function openMenu(){
    return new Promise((resolve)=>{
        function openS(){
            // const openT =document.querySelector('script');
            // openT.src="public/js/menuOk.js";
            // document.querySelector("body").append(openT);
            // console.log('final fantasu');
            document.querySelector(".menu").addEventListener('click',()=>{
                let open=document.createElement('div');
                open.classList.add('openMenush');
                open.innerHTML=` <a href="/">Главная</a><a href="Altai-Mountains-Tour">Тур по горному Алтаю</a> <a href="travel-presentation">Презентация</a>`;
                document.querySelector('main').prepend(open);
                setTimeout(()=>{
                    open.style.height=`100vh`;
                    open.style.transition=`all 1s ease`;
                    open.style.fontSize=`30px`;
                    document.querySelector('.openMenush > a:nth-child(1)').style.fontSize="30px";
                    document.querySelector('.openMenush > a:nth-child(2)').style.fontSize="30px";
                    document.querySelector('.openMenush > a:nth-child(3)').style.fontSize="30px";
                },170);
                function closeMenu(){
                    document.querySelector('.openMenush').remove();
                };
                document.querySelector('.openMenush').addEventListener('click',()=>{
                    open.style.cssText=`
                        top:100%;
                        height:0;
                        transition:all ease 1s;
                    `;
                    setTimeout(()=>{
                        closeMenu();
                    },300);
                });
            });
            
        }
        setTimeout(()=>{
            resolve(openS());
        },1777);
        // setTimeout(()=>{
        //     document.querySelector('.menu').addEventListener('click',()=>{
        //         console.log('click');
        //     })
        // },777)
    });
};//openMenu
async function main(){
    // await first();
    await include();
    await openMenu();
}
main();