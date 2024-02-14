'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('Jobs', [
      {
        title: '10th Doctor',
        shortDescription: "I'm the Doctor, I can save the world with a kettle and some string! ",
        description: "Yeah? Well I'm the Lord of Time. You need to get yourself a better dictionary. When you do, look up 'genocide'. You'll find a little picture of me there, and the caption'll read 'Over my dead body'. I'd call you a genius, except I'm in the room. Black tie...Whenever I wear this, something bad always happens. River, you know my name. You whispered my name in my ear! There's only one reason I would ever tell anyone my name. There's only one time I could... People assume that time is a strict progression of cause-and-effect... but actually, from a non-linear, non-subjective viewpoint, it's more like a big ball of wibbly-wobbly... timey-wimey... stuff.Oh, yes.Harmless is just the word: that's why I like it! Doesn't kill, doesn't wound, doesn't maim. But I'll tell you what it does do: it is very good at opening doors! Aw, I wanted to be ginger! I've never been ginger! And you, Rose Tyler! Fat lot of good you were! You gave up on me! Ooh, that's rude. Is that the sort of man I am now? Am I rude? Rude and not ginger. Black tie...Whenever I wear this, something bad always happens. There was a war. A Time War. The Last Great Time War. My people fought a race called the Daleks, for the sake of all creation. And they lost. We lost. Everyone lost. They're all gone now. My family. My friends. Even that sky.People assume that time is a strict progression of cause-and-effect... but actually, from a non-linear, non-subjective viewpoint, it's more like a big ball of wibbly-wobbly... timey-wimey... stuff. There was a war. A Time War. The Last Great Time War. My people fought a race called the Daleks, for the sake of all creation. And they lost. We lost. Everyone lost. They're all gone now. My family. My friends. Even that sky. Sweet, maybe... Passionate, I suppose... But don't ever mistake that for nice.It is! It's the city of New New York! Strictly speaking, it's the fifteenth New York since the original, so that makes it New-New-New-New-New-New-New-New-New-New-New-New-New-New-New New York. You need to get yourself a better dictionary. When you do, look up 'genocide'. You'll find a little picture of me there, and the caption'll read 'Over my dead body'. Aw, I wanted to be ginger! I've never been ginger! And you, Rose Tyler! Fat lot of good you were! You gave up on me! Ooh, that's rude. Is that the sort of man I am now? Am I rude? Rude and not ginger.",
        wage: "39000",
        place: "Earth",
        hours: "39",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '11th Doctor',
        shortDescription: "Come along, Pond! I need...I need...I need... fish fingers and custard! It's a fez. I wear a fez now. Fezzes are cool.  ",
        description: "Father Christmas. Santa Claus. Or, as I’ve always known him, Jeff. Goodbye, Clara. You are the only mystery worth solving. It's a fez. I wear a fez now. Fezzes are cool. There's something that doesn't make sense. Let's go and poke it with a stick. There are fixed points throughout time where things must stay exactly the way they are. This is not one of them. This is an opportunity! Whatever happens here will create its own timeline, its own reality, a temporal tipping point. The future revolves around you, here, now, so do good!",
        wage: "42000",
        place: "Gallifrey",
        hours: "35",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '12th Doctor',
        shortDescription: "What do you think of the new look? I was hoping for 'minimalism', but I think I came up with 'magician'.",
        description: "My personal plan is that a thing will probably happen quite soon. What do you think of the new look? I was hoping for 'minimalism', but I think I came up with 'magician'. Big scarf, bow tie, big embarrassing. I'm Scottish. I can complain about things now. I can really complain about things now. Shut up! Just shut up, shut up, shut up, shuttity up up up! Be a pal and tell me, Am I a good man? Sorry, I'm going to have to relieve you of your pet. Shut up, I was talking to the horse. It’s a bit more exciting when you go the other way.",
        wage: "35000",
        place: "Mars",
        hours: "50",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '10th Doctor',
        shortDescription: "I'm the Doctor, I can save the world with a kettle and some string! ",
        description: "I'm the Doctor, I can save the world with a kettle and some string! And look! I'm wearing a vegetable! What? What?! WHAT?! You can spend the rest of your life with me, but I can't spend the rest of mine with you. I have to live on. Alone. That's the curse of the Time Lords. You need to get yourself a better dictionary. When you do, look up 'genocide'. You'll find a little picture of me there, and the caption'll read 'Over my dead body'. I'm Dr. James McCrimmon from the township of Balamory. River, you know my name. You whispered my name in my ear! There's only one reason I would ever tell anyone my name. There's only one time I could...",
        wage: "39000",
        place: "Earth",
        hours: "39",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '11th Doctor',
        shortDescription: "Come along, Pond! I need...I need...I need... fish fingers and custard! It's a fez. I wear a fez now. Fezzes are cool.  ",
        description: "Father Christmas. Santa Claus. Or, as I’ve always known him, Jeff. Goodbye, Clara. You are the only mystery worth solving. It's a fez. I wear a fez now. Fezzes are cool. There's something that doesn't make sense. Let's go and poke it with a stick. There are fixed points throughout time where things must stay exactly the way they are. This is not one of them. This is an opportunity! Whatever happens here will create its own timeline, its own reality, a temporal tipping point. The future revolves around you, here, now, so do good!",
        wage: "42000",
        place: "Gallifrey",
        hours: "35",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '12th Doctor',
        shortDescription: "What do you think of the new look? I was hoping for 'minimalism', but I think I came up with 'magician'.",
        description: "My personal plan is that a thing will probably happen quite soon. What do you think of the new look? I was hoping for 'minimalism', but I think I came up with 'magician'. Big scarf, bow tie, big embarrassing. I'm Scottish. I can complain about things now. I can really complain about things now. Shut up! Just shut up, shut up, shut up, shuttity up up up! Be a pal and tell me, Am I a good man? Sorry, I'm going to have to relieve you of your pet. Shut up, I was talking to the horse. It’s a bit more exciting when you go the other way.",
        wage: "35000",
        place: "Mars",
        hours: "50",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '10th Doctor',
        shortDescription: "I'm the Doctor, I can save the world with a kettle and some string! ",
        description: "I'm the Doctor, I can save the world with a kettle and some string! And look! I'm wearing a vegetable! What? What?! WHAT?! You can spend the rest of your life with me, but I can't spend the rest of mine with you. I have to live on. Alone. That's the curse of the Time Lords. You need to get yourself a better dictionary. When you do, look up 'genocide'. You'll find a little picture of me there, and the caption'll read 'Over my dead body'. I'm Dr. James McCrimmon from the township of Balamory. River, you know my name. You whispered my name in my ear! There's only one reason I would ever tell anyone my name. There's only one time I could...",
        wage: "39000",
        place: "Earth",
        hours: "39",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '11th Doctor',
        shortDescription: "Come along, Pond! I need...I need...I need... fish fingers and custard! It's a fez. I wear a fez now. Fezzes are cool.  ",
        description: "Father Christmas. Santa Claus. Or, as I’ve always known him, Jeff. Goodbye, Clara. You are the only mystery worth solving. It's a fez. I wear a fez now. Fezzes are cool. There's something that doesn't make sense. Let's go and poke it with a stick. There are fixed points throughout time where things must stay exactly the way they are. This is not one of them. This is an opportunity! Whatever happens here will create its own timeline, its own reality, a temporal tipping point. The future revolves around you, here, now, so do good!",
        wage: "42000",
        place: "Gallifrey",
        hours: "35",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '12th Doctor',
        shortDescription: "What do you think of the new look? I was hoping for 'minimalism', but I think I came up with 'magician'.",
        description: "My personal plan is that a thing will probably happen quite soon. What do you think of the new look? I was hoping for 'minimalism', but I think I came up with 'magician'. Big scarf, bow tie, big embarrassing. I'm Scottish. I can complain about things now. I can really complain about things now. Shut up! Just shut up, shut up, shut up, shuttity up up up! Be a pal and tell me, Am I a good man? Sorry, I'm going to have to relieve you of your pet. Shut up, I was talking to the horse. It’s a bit more exciting when you go the other way.",
        wage: "35000",
        place: "Mars",
        hours: "50",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '10th Doctor',
        shortDescription: "I'm the Doctor, I can save the world with a kettle and some string! ",
        description: "I'm the Doctor, I can save the world with a kettle and some string! And look! I'm wearing a vegetable! What? What?! WHAT?! You can spend the rest of your life with me, but I can't spend the rest of mine with you. I have to live on. Alone. That's the curse of the Time Lords. You need to get yourself a better dictionary. When you do, look up 'genocide'. You'll find a little picture of me there, and the caption'll read 'Over my dead body'. I'm Dr. James McCrimmon from the township of Balamory. River, you know my name. You whispered my name in my ear! There's only one reason I would ever tell anyone my name. There's only one time I could...",
        wage: "39000",
        place: "Earth",
        hours: "39",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '11th Doctor',
        shortDescription: "Come along, Pond! I need...I need...I need... fish fingers and custard! It's a fez. I wear a fez now. Fezzes are cool.  ",
        description: "Father Christmas. Santa Claus. Or, as I’ve always known him, Jeff. Goodbye, Clara. You are the only mystery worth solving. It's a fez. I wear a fez now. Fezzes are cool. There's something that doesn't make sense. Let's go and poke it with a stick. There are fixed points throughout time where things must stay exactly the way they are. This is not one of them. This is an opportunity! Whatever happens here will create its own timeline, its own reality, a temporal tipping point. The future revolves around you, here, now, so do good!",
        wage: "42000",
        place: "Gallifrey",
        hours: "35",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '12th Doctor',
        shortDescription: "What do you think of the new look? I was hoping for 'minimalism', but I think I came up with 'magician'.",
        description: "My personal plan is that a thing will probably happen quite soon. What do you think of the new look? I was hoping for 'minimalism', but I think I came up with 'magician'. Big scarf, bow tie, big embarrassing. I'm Scottish. I can complain about things now. I can really complain about things now. Shut up! Just shut up, shut up, shut up, shuttity up up up! Be a pal and tell me, Am I a good man? Sorry, I'm going to have to relieve you of your pet. Shut up, I was talking to the horse. It’s a bit more exciting when you go the other way.",
        wage: "35000",
        place: "Mars",
        hours: "50",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Jobs', null , {});

  }
};