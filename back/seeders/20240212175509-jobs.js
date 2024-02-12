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