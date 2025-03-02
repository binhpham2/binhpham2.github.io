/*
ANIMATE THE WELCOME SECTION ON SCROLLING 
*/
export const animateWelcome = () => {
    const welcomeComponent = document.querySelector('.Welcome')
    window.addEventListener('scroll', () => {
        // Get window stats
        const scrollPosY = window.scrollY
        const viewportHeight = window.innerHeight
        const viewportWidth = window.innerWidth

        // Animation range
        const fullOpacityDecrease = 2
        const fullTranslationX = Math.ceil(viewportWidth / 2)

        // Calculate movements
        const animationRatio = scrollPosY / viewportHeight
        const newOpacity = 1 - fullOpacityDecrease * animationRatio
        const newTranslationX = fullTranslationX * animationRatio

        // Perform animation
        welcomeComponent.style.opacity = newOpacity
        welcomeComponent.style.transform = `translateX(-${newTranslationX}px)`
    })
}