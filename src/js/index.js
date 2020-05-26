

let buttonsModal = [...document.querySelectorAll('.open-modal')];
buttonsModal.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector('.olympic-modal-window').style.display = 'block';

    })
});
document.querySelector('.olympic-modal-window').addEventListener('click', (e) => {
    if (e.target.classList.contains('olympic-modal-window')) {
        document.querySelector('.olympic-modal-window').style.display = 'none';
    } else if (e.target.classList.contains('olympic-modal-window__close')) {
        document.querySelector('.olympic-modal-window').style.display = 'none';

    }
});
let leftParametrTypeList = [0, -312, -624];
let leftAdvantagesList = [0, -290, -580, -870];
let leftPricesList = [0, -330, -660, -990];
let leftForButtonsType = 0;
let leftForButtonsAdvantages = 0;
let leftForButtonsPrices = 0;

let controlsButton = [...document.querySelectorAll('.control-slider--button')];

let sliderCheckbox = [...document.querySelectorAll('.slider-checkbox')];

function checkBoxChecked(check, leftStyle, amount, global, parent, leftFor) {
    let leftTurnType = leftStyle[0];
    let leftTurnAdvantage = leftStyle[0];
    let leftTurnPrice = leftStyle[0];
    if (amount === 3) {
        if (check.classList.contains('slider-checkbox--checked')) {

        } else {
            if (check.classList.contains('slide-first-column')) {
                leftTurnType = leftStyle[0];
                leftForButtonsType = leftStyle[0];
                document.querySelector('.slide-first-column').classList.add('slider-checkbox--checked');
                document.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                document.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftTurnType + 'px';
                return leftFor;
            } else if (check.classList.contains('slide-second-column')) {
                leftTurnType = leftStyle[1];
                leftForButtonsType = leftStyle[1];
                document.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                document.querySelector('.slide-second-column').classList.add('slider-checkbox--checked');
                document.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftTurnType + 'px';
                return leftFor;

            } else if (check.classList.contains('slide-third-column')) {
                leftTurnType = leftStyle[2];
                leftForButtonsType = leftStyle[2];
                document.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                document.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                document.querySelector('.slide-third-column').classList.add('slider-checkbox--checked');
                global.style.left = leftTurnType + 'px';
                return leftFor;
            }
        }
    } else if (amount === 4) {
        if (check.classList.contains('slider-checkbox--checked')) {

        } else {
            if (check.classList.contains('slide-first-column')) {
                leftTurnAdvantage = leftStyle[0];
                if (parent.classList.contains('advantages__advantages-container')) {
                    leftForButtonsAdvantages = leftStyle[0];
                } else {
                    leftForButtonsPrices = leftStyle[0];
                }
                parent.querySelector('.slide-first-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-fourth-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftTurnAdvantage + 'px';
                return leftFor;
            } else if (check.classList.contains('slide-second-column')) {
                leftTurnAdvantage = leftStyle[1];
                if (parent.classList.contains('advantages__advantages-container')) {
                    leftForButtonsAdvantages = leftStyle[1];
                } else {
                    leftForButtonsPrices = leftStyle[1];
                }
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-fourth-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftTurnAdvantage + 'px';
                return leftFor;
            } else if (check.classList.contains('slide-third-column')) {
                leftTurnAdvantage = leftStyle[2];
                if (parent.classList.contains('advantages__advantages-container')) {
                    leftForButtonsAdvantages = leftStyle[2];
                } else {
                    leftForButtonsPrices = leftStyle[2];
                }
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-fourth-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftTurnAdvantage + 'px';
                return leftFor;
            } else if (check.classList.contains('slide-fourth-column')) {
                leftTurnAdvantage = leftStyle[3];
                if (parent.classList.contains('advantages__advantages-container')) {
                    leftForButtonsAdvantages = leftStyle[3];
                } else {
                    leftForButtonsPrices = leftStyle[3];
                }
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-fourth-column').classList.add('slider-checkbox--checked');
                global.style.left = leftTurnAdvantage + 'px';
                return leftFor;
            }
        }
    }

};
sliderCheckbox.forEach((check) => {
    check.addEventListener('click', () => {

        if (check.classList.contains('slider-checkbox--type-list')) {
            let amount = 3;
            let global = document.querySelector('.type-list__global-container');
            let parent = document.querySelector('.events-type__events-container');
            let leftFor = leftForButtonsType;
            checkBoxChecked(check, leftParametrTypeList, amount, global, parent, leftFor);
        } else if (check.classList.contains('slider-checkbox--advantages-list')) {
            let amount = 4;
            let global = document.querySelector('.advantages-list__global-container');
            let parent = document.querySelector('.advantages__advantages-container');
            let leftFor = leftForButtonsAdvantages;
            checkBoxChecked(check, leftAdvantagesList, amount, global, parent, leftFor);
        } else if (check.classList.contains('slider-checkbox--prices-list')) {
            let amount = 4;
            let global = document.querySelector('.price-packages-container__global');
            let parent = document.querySelector('.prices__prices-container');
            let leftFor = leftForButtonsPrices;
            checkBoxChecked(check, leftPricesList, amount, global, parent, leftFor);
        }
    })
});

function checkControlButton(button, amount, parent, global, leftFor, leftStyle) {
    if (amount === 3) {
        if (button.classList.contains('slider-right-button')) {
            console.log(leftFor);
            if (leftFor <= leftStyle[2]) {
                leftFor = leftStyle[0];
                parent.querySelector('.slide-first-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftFor + 'px';
                leftForButtonsType = leftFor;
                return leftFor;
            } else if (leftFor === leftStyle[0]) {
                leftFor = leftStyle[1];
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftFor + 'px';
                leftForButtonsType = leftFor;
                return leftFor;
            } else if (leftFor === leftStyle[1]) {
                leftFor = leftStyle[2];
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.add('slider-checkbox--checked');
                global.style.left = leftFor + 'px';
                leftForButtonsType = leftFor;
                return leftFor;
            }
        } else if (button.classList.contains('slider-left-button')) {
            if (leftFor === leftStyle[0]) {
                leftFor = leftStyle[2];
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.add('slider-checkbox--checked');
                global.style.left = leftFor + 'px';
                leftForButtonsType = leftFor;
                return leftFor;
            } else if (leftFor <= leftStyle[2]) {
                leftFor = leftStyle[1];
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftFor + 'px';
                leftForButtonsType = leftFor;
                return leftFor;
            } else if (leftFor === leftStyle[1]) {
                leftFor = leftStyle[0];
                parent.querySelector('.slide-first-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftFor + 'px';
                leftForButtonsType = leftFor;
                return leftFor;
            }
        }
    } else if (amount === 4) {
        if (button.classList.contains('slider-right-button')) {
            if (leftFor <= leftStyle[3]) {
                leftFor = leftStyle[0];

                parent.querySelector('.slide-first-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-fourth-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftFor + 'px';
                if (parent.classList.contains('advantages__advantages-container')) {
                    leftForButtonsAdvantages = leftFor;
                } else {
                    leftForButtonsPrices = leftFor;
                }
                return leftFor;
            } else if (leftFor === leftStyle[2]) {
                leftFor = leftStyle[3];
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-fourth-column').classList.add('slider-checkbox--checked');
                global.style.left = leftFor + 'px';
                if (parent.classList.contains('advantages__advantages-container')) {
                    leftForButtonsAdvantages = leftFor;
                } else {
                    leftForButtonsPrices = leftFor;
                }
                return leftFor;
            } else if (leftFor === leftStyle[0]) {
                leftFor = leftStyle[1];
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-fourth-column').classList.remove('slider-checkbox--checked');

                global.style.left = leftFor + 'px';
                if (parent.classList.contains('advantages__advantages-container')) {
                    leftForButtonsAdvantages = leftFor;
                } else {
                    leftForButtonsPrices = leftFor;
                }
                return leftFor;
            } else if (leftFor === leftStyle[1]) {
                leftFor = leftStyle[2];
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-fourth-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftFor + 'px';
                if (parent.classList.contains('advantages__advantages-container')) {
                    leftForButtonsAdvantages = leftFor;
                } else {
                    leftForButtonsPrices = leftFor;
                }
                return leftFor;
            }
        } else if (button.classList.contains('slider-left-button')) {
            if (leftFor <= leftStyle[3]) {
                leftFor = leftStyle[2];
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-fourth-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftFor + 'px';
                if (parent.classList.contains('advantages__advantages-container')) {
                    leftForButtonsAdvantages = leftFor;
                } else {
                    leftForButtonsPrices = leftFor;
                }
                return leftFor;
            } else if (leftFor === leftStyle[2]) {
                leftFor = leftStyle[1];
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-fourth-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftFor + 'px';
                if (parent.classList.contains('advantages__advantages-container')) {
                    leftForButtonsAdvantages = leftFor;
                } else {
                    leftForButtonsPrices = leftFor;
                }
                return leftFor;
            } else if (leftFor === leftStyle[0]) {
                leftFor = leftStyle[3];
                parent.querySelector('.slide-first-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-fourth-column').classList.add('slider-checkbox--checked');

                global.style.left = leftFor + 'px';
                if (parent.classList.contains('advantages__advantages-container')) {
                    leftForButtonsAdvantages = leftFor;
                } else {
                    leftForButtonsPrices = leftFor;
                }
                return leftFor;
            } else if (leftFor === leftStyle[1]) {
                leftFor = leftStyle[0];
                parent.querySelector('.slide-first-column').classList.add('slider-checkbox--checked');
                parent.querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
                parent.querySelector('.slide-fourth-column').classList.remove('slider-checkbox--checked');
                global.style.left = leftFor + 'px';
                if (parent.classList.contains('advantages__advantages-container')) {
                    leftForButtonsAdvantages = leftFor;
                } else {
                    leftForButtonsPrices = leftFor;
                }
                return leftFor;
            }
        }
    }
}

controlsButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('slider-right-button')) {
            if (button.classList.contains('slider-type-list-right-button')) {
                let parent = document.querySelector('.events-type__events-container');
                let leftFor = leftForButtonsType;
                let amount = 3;
                let global = document.querySelector('.type-list__global-container');
                checkControlButton(button, amount, parent, global, leftFor, leftParametrTypeList);
            } else if (button.classList.contains('slider-advantages-list-right-button')) {
                let amount = 4;
                let global = document.querySelector('.advantages-list__global-container');
                let parent = document.querySelector('.advantages__advantages-container');
                let leftFor = leftForButtonsAdvantages;
                checkControlButton(button, amount, parent, global, leftFor, leftAdvantagesList);
            } else if (button.classList.contains('slider-prices-list-right-button')) {
                let amount = 4;
                let global = document.querySelector('.price-packages-container__global');
                let parent = document.querySelector('.prices__prices-container');
                let leftFor = leftForButtonsPrices;
                checkControlButton(button, amount, parent, global, leftFor, leftPricesList);
            }

        } else if (button.classList.contains('slider-left-button')) {
            if (button.classList.contains('slider-type-list-left-button')) {
                let parent = document.querySelector('.events-type__events-container');
                let leftFor = leftForButtonsType;
                let amount = 3;
                let global = document.querySelector('.type-list__global-container');
                checkControlButton(button, amount, parent, global, leftFor, leftParametrTypeList);
            } else if (button.classList.contains('slider-advantages-list-left-button')) {
                let amount = 4;
                let global = document.querySelector('.advantages-list__global-container');
                let parent = document.querySelector('.advantages__advantages-container');
                let leftFor = leftForButtonsAdvantages;
                checkControlButton(button, amount, parent, global, leftFor, leftAdvantagesList);
            } else if (button.classList.contains('slider-prices-list-left-button')) {
                let amount = 4;
                let global = document.querySelector('.price-packages-container__global');
                let parent = document.querySelector('.prices__prices-container');
                let leftFor = leftForButtonsPrices;
                checkControlButton(button, amount, parent, global, leftFor, leftPricesList);
            }
        }
    })
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 920) {
        document.querySelector('.type-list__global-container').style.left = '0';
        document.querySelector('.advantages-list__global-container').style.left = '0';
        document.querySelector('.price-packages-container__global').style.left = '0';
        document.querySelector('.events-type__events-container').querySelector('.slide-first-column').classList.add('slider-checkbox--checked');
        document.querySelector('.advantages__advantages-container').querySelector('.slide-first-column').classList.add('slider-checkbox--checked');
        document.querySelector('.prices__prices-container').querySelector('.slide-first-column').classList.add('slider-checkbox--checked');
        document.querySelector('.events-type__events-container').querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
        document.querySelector('.advantages__advantages-container').querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
        document.querySelector('.prices__prices-container').querySelector('.slide-second-column').classList.remove('slider-checkbox--checked');
        document.querySelector('.events-type__events-container').querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
        document.querySelector('.advantages__advantages-container').querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
        document.querySelector('.prices__prices-container').querySelector('.slide-third-column').classList.remove('slider-checkbox--checked');
        document.querySelector('.advantages__advantages-container').querySelector('.slide-fourth-column').classList.remove('slider-checkbox--checked');
        document.querySelector('.prices__prices-container').querySelector('.slide-fourth-column').classList.remove('slider-checkbox--checked');
        leftForButtonsType = 0;
        leftForButtonsAdvantages = 0;
        leftForButtonsPrices = 0;
    } else {
    }
});

document.body.addEventListener('touchmove', () => {

});

let eventStart = null;

document.addEventListener("touchstart", function (e) {
    eventStart = e;
});

document.body.addEventListener('touchend', (e) => {
    if (window.matchMedia("(max-width: 920px)").matches) {
        let changeT = e.changedTouches[0].clientX - eventStart.changedTouches[0].clientX;

        if (e.target.classList.contains('single-event-container__event-caption') || e.target.classList.contains('single-event-container__event-picture') || e.target.classList.contains('type-list__group-type-container') || e.target.classList.contains('type-list__global-container') || e.target.classList.contains('events-type__type-list')) {
            let touchobj = e.changedTouches[0];
            let startx = 0;
            startx = parseInt(touchobj.clientX);
            if (changeT < 0) {
                document.querySelector('.slider-type-list-right-button').click();
            } else if (changeT > 0) {
                document.querySelector('.slider-type-list-left-button').click();
            }
            eventStart = null;
        } else if (e.target.classList.contains('single-advantage__advantage-picture') || e.target.classList.contains('single-advantage__advantage-caption') || e.target.classList.contains('advantage-picture__container-image') || e.target.classList.contains('single-advantage') || e.target.classList.contains('advantages-list__group-type-container') || e.target.classList.contains('advantages-list__global-container') || e.target.classList.contains('advantages-container__advantages-list')) {
            let touchobj = e.changedTouches[0];
            let startx = 0;
            startx = parseInt(touchobj.clientX);
            if (changeT < 0) {
                document.querySelector('.slider-advantages-list-right-button').click();
            } else if (changeT > 0) {
                document.querySelector('.slider-advantages-list-left-button').click();
            }
            eventStart = null;
        } else if (e.target.classList.contains('price-type-container__package-price') || e.target.classList.contains('package-type-development__title') || e.target.classList.contains('package-type-development') || e.target.classList.contains('single-price-package__price-type-container') || e.target.classList.contains('title-container__package-title') || e.target.classList.contains('single-price-package__title-container') || e.target.classList.contains('single-price-package__single-service') || e.target.classList.contains('single-price-package__list') || e.target.classList.contains('single-price-package__connect-package') || e.target.classList.contains('single-price-package') || e.target.classList.contains('price-packages-container__global') || e.target.classList.contains('price-packages-container')) {
            let touchobj = e.changedTouches[0];
            let startx = 0;
            startx = parseInt(touchobj.clientX);
            if (changeT < 0) {
                document.querySelector('.slider-prices-list-right-button').click();
            } else if (changeT > 0) {
                document.querySelector('.slider-prices-list-left-button').click();
            }
            eventStart = null;
        }
    }
});

window.addEventListener('scroll', function () {
    if (pageYOffset > 581) {
        document.querySelector('.olympic-hall-header__header-container').classList.add('olympic-hall-header__header-container--darker');
        if (window.matchMedia("(max-width: 920px)").matches) {
            document.querySelector('.header-list__button-try-container').style.display = 'none';

        } else {
            document.querySelector('.header-list__button-try-container').style.display = 'flex';

        }

    } else {
        document.querySelector('.olympic-hall-header__header-container').classList.remove('olympic-hall-header__header-container--darker');
        document.querySelector('.header-list__button-try-container').style.display = 'flex';

    }
});
let linkAdvantage = [...document.body.querySelectorAll('.header-list__links--advantages')];
let linksHeader = [...document.body.querySelectorAll('.header-list__links')];
let linkPrice = [...document.body.querySelectorAll('.header-list__links--prices')];
let linkContacts = [...document.body.querySelectorAll('.header-list__links--contacts')];
linkAdvantage.forEach((link) => {
    link.classList.add('header-list__links--focused');
});
linksHeader.forEach((link) => {
    link.addEventListener('click', () => {
        document.getElementById('header-list__toggle-list').checked = false;
        if (link.classList.contains('header-list__links--advantages')) {

            if (link.classList.contains('header-list__links--focused')) {

            } else {

                linkContacts.forEach((otherLink) => {
                    otherLink.classList.remove('header-list__links--focused');
                });
                linkPrice.forEach((otherLink) => {
                    otherLink.classList.remove('header-list__links--focused');
                });
                linkAdvantage.forEach((otherLink) => {
                    otherLink.classList.add('header-list__links--focused');
                });
            }
        }
        if (link.classList.contains('header-list__links--prices')) {

            if (link.classList.contains('header-list__links--focused')) {

            } else {

                linkAdvantage.forEach((otherLink) => {
                    otherLink.classList.remove('header-list__links--focused');
                });
                linkContacts.forEach((otherLink) => {
                    otherLink.classList.remove('header-list__links--focused');
                });
                linkPrice.forEach((otherLink) => {
                    otherLink.classList.add('header-list__links--focused');
                });
            }
        }
        if (link.classList.contains('header-list__links--contacts')) {

            if (link.classList.contains('header-list__links--focused')) {

            } else {

                linkAdvantage.forEach((otherLink) => {
                    otherLink.classList.remove('header-list__links--focused');
                });
                linkPrice.forEach((otherLink) => {
                    otherLink.classList.remove('header-list__links--focused');
                });
                linkContacts.forEach((otherLink) => {
                    otherLink.classList.add('header-list__links--focused');
                });
            }
        }
    });
});