$(document).ready(function() {
    // Criando o um dropdown.
    $('.btn-menu').click(function() {
        $('nav').slideToggle();
    });

    // Setando o posicionamento do elemento <nav></nav>.
    const element = document.querySelector('.left');
    const positionTop = element.getBoundingClientRect().bottom;
    $('nav').css('top', positionTop+ 'px');

    //Criando botoes dropdown com base na quantidade de articles quando a tela fica abaixo de 1024px.
    const set = setInterval(() => {
        if (window.screen.width <= 1023) {
            $('.ft-grid > article').each(function() {
                const artBtn = document.createElement('button');
                artBtn.classList.add('art-btn');
                $(this).before(artBtn);
            })

            $('.art-btn:nth-of-type(1)').text('Ajuda');
            $('.art-btn:nth-of-type(2)').text('Serviços');
            $('.art-btn:nth-of-type(3)').text('SOBRE A LOREM IPSUM');

            $('.art-btn:nth-of-type(1)').click(function() {
                $('article:nth-of-type(1)').slideToggle();
            });

            $('.art-btn:nth-of-type(2)').click(function() {
                $('article:nth-of-type(2)').slideToggle();
            });

            $('.art-btn:nth-of-type(3)').click(function() {
                $('article:nth-of-type(3)').slideToggle();
            });

            if ($('.ft-grid >  button').length === 3) {
                clearInterval(set)
            }
        } else if (window.screen.width >= 1024) {

        }
        
    }, 400);

    const carList = document.createElement('span');
    carList.classList.add('car-list');

    $('.right').append(carList);

    $('.car-list-img').click(function() {
        $('.car-list').slideToggle();
    });

    // Adicionando os itens a lista do carrinho.
    $('.add-list').click(function() {
        const listItem = $(this).closest('li');
        const listItemClone = listItem.clone();
        $('.car-list').append(listItemClone);
        
    });

    setInterval(() => {
        let listItens = $('.car-list > li').length;
        itemsList.innerHTML = listItens
    }, 400);


    $('.car-list').css('top', positionTop + 'px');

    // Randomizando os preços.
    $('.store > ul > li').each(function() {
        const randomNumber = Math.floor(Math.random() * 9700);
        
        const brl = randomNumber.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        $(this).find('.price').append(brl);
    });

    if (window.screen.width < 641) {
        $('.ipsum-hidden').click(function() {
            $('#sobre').slideToggle();
        });
    }


});