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
         setTimeout(()=>{
            document.querySelector("nav").style.opacity="1";
        },777);
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
                    open.style.opacity=`1`;
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
                        opacity:0;
                    `;
                    setTimeout(()=>{
                        for(let j=0;j<document.querySelectorAll(".openMenush > a").length;j++){
                        console.log(j);
                            document.querySelectorAll('.openMenush > a')[j].style.fontSize="0px";
                        }
                    },1);
                    setTimeout(()=>{                     
                        closeMenu();
                    },499);
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
function yearDate(){
    return new Promise((resolve)=>{
        function dateYear(){
            const d = new Date();
            let year=d.getFullYear();
            document.querySelector('#dateYear').innerHTML=`${year}`;
        }
        setTimeout(()=>{
          resolve(dateYear());
        },777);
    })};//year
function sendNow(){
    return new Promise((resolve)=>{
        function send(){
            if(window.location.pathname!="/"){
                return;
            }else{
                document.querySelector('.destForm').addEventListener('submit', function(event) {
                        event.preventDefault(); // предотвращаем стандартную отправку формы

                        // Получаем значения полей формы
                        const name = document.querySelector('#name').value;
                        const date = document.querySelector('#date').value;
                        const how = document.querySelector('#how').value;

                        // Формируем сообщение
                        const message = `Здравствуйте! Меня зовут: ${name}\n  и меня нтересует тур на: ${date}\n : ${how}`;

                        // Формируем ссылку для отправки сообщения в WhatsApp
                        const whatsappLink = `https://api.whatsapp.com/send?phone=+79893619813&text=${encodeURIComponent(message)}`;

                        // Открываем ссылку в новом окне
                        window.open(whatsappLink, '_blank');
                    });
            }
        
        }
        setTimeout(()=>{
            resolve(send());
        },377);
    })};

    function tawk(){
        return new Promise((resolve)=>{
            function goTawk(){
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/683ed4ce945f2a1912c9ad09/1isqmuhtf';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
            }
          resolve(goTawk());
        });
    };//tawk
async function main(){
    // await first();
    await include();
    await openMenu();
    await sendNow();
    await yearDate();
    await tawk();
}
main();