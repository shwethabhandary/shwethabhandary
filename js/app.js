const navSlide = () => {
            const menu = document.querySelector('.menu');
            const nav = document.querySelector('.menu-list');
            const menuList = document.querySelectorAll('.menu-list li');

            menu.addEventListener('click', () => {
                nav.classList.toggle('nav-active');

                menuList.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    }
                    else {
                        link.style.animation = `navReveal 0.5s ease forwards ${index / 7 + 0.5}s`;
                    }
                });
                menu.classList.toggle('toggle');
            });
        }

        navSlide();

        $(function () {
            var header = $("#mynav");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 100) {
                    header.removeClass('nav').addClass('nav2');
        }
            else {
                header.removeClass('nav2').addClass('nav');
            }
            });
 });

document.getElementById("aboutme").innerHTML = "&emsp;&emsp;&emsp;  My name is Shwetha Shyam Bhandary and I'm a woman in tech. I  Completed my undergraduation from Canara Engineering College, affiliated to Visvesvaraya Technological University pursuing B.E. in Computer Science and Engineering ;and currently working with Infosys as System Engineer.<br/><br/>&emsp;&emsp;&emsp;I\'m a Global Ambassador from India for<b> WomenTech Network</b>. I\'ve also been a Student Scholar at <b>Grace Hopper Celebration India (GHCI) </b>for the year 2019 conducted by AnitaB.org which is the largest gathering of women in tech in Asia.<br/><br/>&emsp;&emsp;&emsp;In my free time I usually like doing digital art, reading books, blogs and also travel. I\'ve also been a Basketball player, Numismatist and Philatelist.";
