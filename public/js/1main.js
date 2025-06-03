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
        //That link to Menu O_o
        const linkToMenush= '<a href="/">Главная</a><a href="Altai-Mountains-Tour">Тур по горному Алтаю</a> <a href="travel-presentation">Презентация</a>';
        //the End lint to menu!
        function openS(){
            document.querySelector(".menu").addEventListener('click',()=>{
                let open=document.createElement('div');
                open.classList.add('openMenush');
                open.innerHTML=`${linkToMenush}`;
                document.querySelector('main').prepend(open);

                setTimeout(()=>{
                    let countLink=document.querySelectorAll(".openMenush > a").length;
                    // console.log(countLink);
                    open.style.height=`100vh`;
                    open.style.transition=`all 1s ease`;
                    open.style.fontSize=`30px`;
                    for(let i=0;i<countLink;i++){
                        // console.log(i);
                        document.querySelectorAll('.openMenush > a')[i].style.fontSize="30px";
                    }
                },1);
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
                    },299);
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