$(document).ready(function(){

    // // Homepage hero
    // const heroController = new ScrollMagic.Controller()
    //
    // const heroTween = gsap.timeline()
    //
    //
    // heroTween.from(".hero__header h1", 1.5, {autoAlpha:0, x:-20})
    // heroTween.from(".hero-media", 1.5, {autoAlpha:0, x:-20})
    //
    //
    // const heroScene = new ScollMagic.Scene({
    //     triggerElement: ".hero-js"
    // })
    //
    //     .setTween(heroTween)
    //     .addIndicators({
    //         name: "hero"
    //     })
    //     .addTo(heroController)


    // homepage - action
    // const actionController =  new ScrollMagic.Controller()
    //
    // const actionTween = gsap.timeline()
    //
    // actionTween.from(".action img", 1.5, {autoAlpha:0, y:5})
    // actionTween.from(".action__content", 0.1 ,{autoAlpha:0})
    //
    // const actionScene = new ScrollMagic.Scene({
    //     triggerElement: ".action-js"
    // })
    //
    //     .setTween(actionTween)
    //     .addIndicators({
    //         name: "actions"
    //     })
    //     .addTo(actionController)


    const actionController2 =  new ScrollMagic.Controller()

    const actionScene2 = new ScrollMagic.Scene({
        triggerElement: ".action-js",
        duration: "25%"
    })

        .setPin(".action__content-js")
        .addIndicators({
            name: "actions"
        })
        .addTo(actionController2)



    const createController = new ScrollMagic.Controller()

    const createScene = new ScrollMagic.Scene({
        triggerElement: "#create",
        duration:"100%"
    })

        .setTween(gsap.fromTo(".create-bg-colour", 2, {backgroundColor: "#eee"}, {backgroundColor: "#F3494A"}))


        .addIndicators({
            name: "create"
        })
        .addTo(createController)


    const infoController = new ScrollMagic.Controller()

    const infoScene = new ScrollMagic.Scene({
        triggerElement:".info"
    })

        .setTween(gsap.from(".info", 2, {autoAlpha:0, y:15}))
        .addTo(infoController)

});


