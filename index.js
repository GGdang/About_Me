
    const resume = new Vue({
        el:'.resume',
        data:{
            header:{img:['images/header_bg_001.jpg','images/header_bg_002.jpg','images/header_bg_003.jpg']},
            fixexBar:{list:['About','Skills','Works','Contact'],connet:['#about-me','#skills','#works','#contact']},
            content:{about:['待人誠懇、工作負責','積極主動、勤於學習'],
                     skills:{skill:['HTML/CSS/RWD','JavaScript/jQuery/Vue.js','Ajax','SQL語法','GitHub'],
                             level:['80','70','80','60','60']},
                     works:{content:['https://ggdang.github.io/apiTest/',
                                     'https://ggdang.github.io/test/',   
                                     'https://ggdang.github.io/test1/'],
                            img:['images/google_map_api.jpg',
                                 'images/test_001.jpg',
                                 'images/test1_001.jpg'],
                            useTech:{count:'',
                                tech:[{use1:['Vue框架','JavaScript/jQuery','HTML/CSS/RWD']},
                                      {use2:['Vue框架','JavaScript/jQuery','ajax/串接api']}],
                                    },
                            },
                    },
            windowValue:{
                    scrollTop:0,windowX:0,fixedbarY:0,
                    aboutMeY:0,skillsY:0,worksY:0,contactY:0
                },
            },
        methods:{
            topBtn:function(){
                const self = this;
                $('html,body').stop(true,false).animate({scrollTop:0},800);
            },
            fixedBtnDrop:function(){
                $('.drop-menu').slideToggle();
            },
            link:function(){
                const self=this;
                let ul_one=document.getElementById('link-one');
                let ul_one_lis=ul_one.getElementsByTagName('li');
                for (let i = 0;i < ul_one_lis.length; i++) {
                    ul_one_lis[i].index = i;
                    ul_one_lis[i].onclick=function(){
                    let num=this.index+1;
                        switch(num){
                            case 1:
                            $("html,body").stop(true,false).animate({scrollTop:self.windowValue.aboutMeY-100},800);
                            break;
                            case 2:
                            $("html,body").stop(true,false).animate({scrollTop:self.windowValue.skillsY-100},800);
                            break;
                            case 3:
                            $("html,body").stop(true,false).animate({scrollTop:self.windowValue.worksY-100},800);
                            break;
                            case 4:
                            $("html,body").stop(true,false).animate({scrollTop:self.windowValue.contactY-100},800);
                            break;
                            default:
                            $("html,body").stop(true,false).animate({scrollTop:0},800);
                        }
                    }
                }
                let ul_two=document.getElementById('link-two');
                let ul_two_lis=ul_two.getElementsByTagName('li');
                for(let i=0;i<ul_two_lis.length;i++){
                    ul_two_lis[i].index = i;
                    ul_two_lis[i].onclick=function(){
                        let num=this.index+1;
                        switch(num){
                            case 1:
                            $("html,body").stop(true,false).animate({scrollTop:self.windowValue.aboutMeY-100},800);
                            break;
                            case 2:
                            $("html,body").stop(true,false).animate({scrollTop:self.windowValue.skillsY-100},800);
                            break;
                            case 3:
                            $("html,body").stop(true,false).animate({scrollTop:self.windowValue.worksY-100},800);
                            break;
                            case 4:
                            $("html,body").stop(true,false).animate({scrollTop:self.windowValue.contactY-100},800);
                            break;
                            default:
                            $("html,body").stop(true,false).animate({scrollTop:0},800);
                        }
                    }
                }
            },
        },
        computed:{
            animate:function(){
                const self=this;
                if((self.windowValue.scrollTop+400)>self.windowValue.fixedbarY){
                    $('.top-btn').stop(true,false).animate({'right':'50px'},500);
                }else{
                    $('.top-btn').stop(true,false).animate({'right':'-100px'},500);
                }
                if((self.windowValue.aboutMeY-self.windowValue.scrollTop)<500||(self.windowValue.scrollTop>self.windowValue.aboutMeY)){
                   $('#about-me').css({'visibility':'visible'});
                    $('#about-me').addClass('zoomInLeft');   
                }          
                if((self.windowValue.skillsY-self.windowValue.scrollTop)<400){
                    $('#skills').css({'visibility':'visible'});
                    $('#skills').addClass('zoomInRight');
                    for(let i =0 ; i<self.content.skills.level.length;i++){
                        let temp = self.content.skills.level[i]*3;
                        $('.level').eq(i).animate({width:temp},2000);
                    }
                }
                if((self.windowValue.worksY-self.windowValue.scrollTop)<400){
                    $('#works').css({'visibility':'visible'});
                    $('#works').addClass('zoomInLeft');
                }
                if(((self.windowValue.contactY-self.windowValue.scrollTop)<400)||(self.windowValue.windowX>1000&&(self.windowValue.contactY-self.windowValue.scrollTop)<500)){
                    $('#contact').css({'visibility':'visible'});
                    $('#contact').addClass('zoomInRight'); 
                } 
            },
            fixedBarList:function(){
                const self = this;
                if(self.windowValue.windowX<991){
                    return 'display:none'
                }
            },
            fixedBtn:function(){
                const self = this;
                if(self.windowValue.windowX<991){
                    return 'display:block'
                }
            },
            dropMenu:function(){
                const self = this;
                if(self.windowValue.windowX>991){
                    return 'display:none'
                }
            },
            fixedBar:function(){
                const self = this;
                if(self.windowValue.scrollTop>=self.windowValue.fixedbarY){
                    return 'fixed'
                }
            },
        },
        created:function(){
                const self = this;
                const fixexBar = document.getElementById('fixed-bar');
                const header = document.getElementById('header');
                self.windowValue.scrollTop=$(document).scrollTop(); 
                window.addEventListener('scroll',function(){
                    self.windowValue.scrollTop=$(document).scrollTop();
                });
                self.windowValue.windowX=document.body.clientWidth;
                self.windowValue.fixedbarY=$('.fixed-bar').offset().top;
                self.windowValue.aboutMeY=$('#about-me').offset().top;
                self.windowValue.skillsY=$('#skills').offset().top;
                self.windowValue.worksY=$('#works').offset().top;
                self.windowValue.contactY=$('#contact').offset().top;
                window.addEventListener('resize',function(){        
                    self.windowValue.fixedbarY=$('.fixed-bar').offset().top;
                    self.windowValue.windowX=document.body.clientWidth;
                    self.windowValue.aboutMeY=$('#about-me').offset().top;
                    self.windowValue.skillsY=$('#skills').offset().top;
                    self.windowValue.worksY=$('#works').offset().top;
                    self.windowValue.contactY=$('#contact').offset().top;
                });  

    
            },
        mounted:function(){
            const self=this;
            if((self.windowValue.scrollTop+400)>self.windowValue.fixedbarY){
                $('.top-btn').stop(true,false).animate({'right':'50px'},500);
            }else{
                $('.top-btn').stop(true,false).animate({'right':'-100px'},500);
            }
            if((self.windowValue.aboutMeY-self.windowValue.scrollTop)<500||(self.windowValue.scrollTop>self.windowValue.aboutMeY)){
               $('#about-me').css({'visibility':'visible'});
                $('#about-me').addClass('zoomInLeft');   
            }          
            if((self.windowValue.skillsY-self.windowValue.scrollTop)<400){
                $('#skills').css({'visibility':'visible'});
                $('#skills').addClass('zoomInRight');
                for(let i =0 ; i<self.content.skills.level.length;i++){
                    let temp = self.content.skills.level[i]*3;
                    $('.level').eq(i).animate({width:temp},2000);
                }
            }
            if((self.windowValue.worksY-self.windowValue.scrollTop)<400){
                $('#works').css({'visibility':'visible'});
                $('#works').addClass('zoomInLeft');
            }
            if(((self.windowValue.contactY-self.windowValue.scrollTop)<400)||(self.windowValue.windowX>1000&&(self.windowValue.contactY-self.windowValue.scrollTop)<500)){
                $('#contact').css({'visibility':'visible'});
                $('#contact').addClass('zoomInRight'); 
            } 
            },
        });





