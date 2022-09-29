const tamagotchi = {
    name: 'Moonlight',
    weight: 1,
    age: 0,
    birthday: '9/28/2022',
    description: 'A long haired tuxedo cat',
    hungerLevel: 'pretty hungry',
    happinessLevel: 'happy but also moody',
    attentionLevel: 'needs attention time to time',
    lifeStage: 'teen',
    isHungry: true,
    wantToPlay: true,
    isHappy: true,
    needsAttention: false,
    eat: function(){
        console.log("Yum!")
    },
    speak: function(){
        console.log('Meow!')
    },
    play: function(){
        console.log('Moonlight is ready to play: Throws hairband')
    }
}

console.log(tamagotchi)
tamagotchi.eat()
tamagotchi.speak()
tamagotchi.play()

console.log(tamagotchi.age)
console.log(tamagotchi.birthday)
console.log(tamagotchi.weight)
console.log(tamagotchi.description)
